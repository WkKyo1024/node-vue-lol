module.exports = (options) => {
  const jwt = require("jsonwebtoken");
  const assert = require("http-assert");
  const AdminUser = require("../models/AdminUser");
  return async (req, res, next) => {
    const token = String(req.headers.authorization || "")
      .split(" ")
      .pop();
    assert(token, 401, "请先登录1 缺少authorization");
    const { id } = jwt.verify(token, req.app.get("secret"));
    assert(id, 401, "请先登录2 缺少token");
    req.user = await AdminUser.findById(id);
    assert(req.user, 401, "请先登录3 用户没有");
    await next();
  };
};
