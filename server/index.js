const express = require("express");
const app = express();
const port = 3000;

app.use(require("cors")());
app.use(express.json());
// 静态文件托管
app.use("/uploads", express.static(__dirname + "/uploads"));
require("./plugins/db")(app);
require("./routes/admin")(app);

app.listen(port, () => console.log("运行在：http:localhost:3000"));
