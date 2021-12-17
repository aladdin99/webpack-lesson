import "./index.css"

new Promise((a, b, resolve)=>{
    const result = a*b;
    resolve(result);
}).then((res)=>{
    console.log("promise 计算结果：", res);
    console.log("---");
});