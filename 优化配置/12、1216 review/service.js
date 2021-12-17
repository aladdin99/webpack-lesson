const express = require("express");
const app = express();

app.use(express.static("./build"));

app.listen(3090, ()=>{
    console.log("端口号3090服务已启动！");
});