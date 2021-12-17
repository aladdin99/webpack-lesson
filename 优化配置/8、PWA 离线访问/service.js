const express = require('express');

const app = express();

app.use(express.static("build"));

app.listen(3002,()=>{
    console.log("3002 service is running....");
});