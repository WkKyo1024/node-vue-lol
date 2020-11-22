const AdminUser = require("../../models/AdminUser");
const jwt = require("jsonwebtoken");
const assert = require("http-assert");
module.exports = (app) => {
  const express = require("express");
  const router = express.Router({
    mergeParams: true,
  });
  // mergeParams 是把:resource参数合并到里面来 让里面能访问到

  // 创建资源
  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    res.send(model);
  });
  // 资源列表
  router.get("/", async (req, res) => {
    // populate('parent')是获取parent的全部字段 关联查询
    const queryOptions = {};
    if (req.Model.modelName === "Category") {
      queryOptions.populate = "parent";
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(20);
    res.send(items);
  });
  // 获取指定资源
  router.get("/:id", async (req, res) => {
    const model = await req.Model.findById(req.params.id);
    res.send(model);
  });
  // 更新
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  });
  // 删除
  router.delete("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true,
    });
  });

  // 登录校验中间件
  const authMiddleware = require("../../middleware/auth");
  // 资源中间件
  const resourceMiddleware = require("../../middleware/resource");
  app.use(
    "/admin/api/rest/:resource",
    authMiddleware(),
    resourceMiddleware(),
    router
  );

  const multer = require("multer");
  const upload = multer({ dest: __dirname + "\\..\\..\\uploads" });
  app.post(
    "/admin/api/upload",
    authMiddleware(),
    upload.single("file"),
    async (req, res) => {
      const file = req.file;
      file.url = `http://localhost:3000/uploads/${file.filename}`;
      res.send(file);
    }
  );
  app.post("/admin/api/login", async (req, res) => {
    // 解构赋值
    const { username, password } = req.body;
    // 1.根据用户名找用户
    const user = await AdminUser.findOne({
      username: username,
    }).select("+password");
    assert(user, 444, "用户不存在");
    // 2.校验密码
    const isValid = require("bcrypt").compareSync(password, user.password);
    assert(isValid, 444, "密码错误");
    // 3.返回token
    //用到jsonwebtoken模块
    // sign生成一个token
    const token = jwt.sign(
      {
        id: user._id,
      },
      app.get("secret")
    );

    res.send({ token });
  });

  // 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message,
    });
  });
};
