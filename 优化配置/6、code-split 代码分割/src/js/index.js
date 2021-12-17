import $ from "jquery"

console.log($);

// 通过 js 文件代码，让某个文件被单独打包成一个 chunk.
import(/* webpackChunkName: 'test'*/ "./test.js").then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log();
})