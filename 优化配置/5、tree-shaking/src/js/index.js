import { add } from "./test"
import "../css/index.css"

// eslint-disable-next-line
const m = new Promise((resolve)=>{
    console.log("程序已执行");
    resolve();
});

console.log(add(2, 8));