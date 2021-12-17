const express = require("express");
const app = express();

app.use(express.static("./build"));

app.listen(8790,()=>{
    console.log("8790 服务启动成功！");
});