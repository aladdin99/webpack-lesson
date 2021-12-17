import "./../index.css"

// 例如：引入两份js代码
import print from "./print.js"
import check from "./check.js"

console.log("原生 js dev-server running!! -!");

if(module.hot){
    // 一旦 module.hot 为 true，说明开启了 HMR 功能。 ---> 让 HMR 功能代码生效。
    module.hot.accept("./print.js", function(){
        // 方法会监听 print.js 文件的变化，一旦发生变化，其它模块不会重新构建打包。
        print();
    });

    module.hot.accept("./check.js", function(){
        check();
    });
}

