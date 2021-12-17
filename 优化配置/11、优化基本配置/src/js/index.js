import test from "./test.vue"
// import {add} from "./add.js"
// import $ from "jQuery"

// externals 的使用：cdn
// (1)cdn 方式使用 vue
Vue.config.productionTip = false
new Vue({
    render: h => h(test),
}).$mount('#app')

// (2)cdn 方式使用 jquery
console.log($);


// pwa检测命令
if("serviceWorker" in navigator){
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register("./service-worker.js").then(()=>{
            console.log("Sw 服务启动成功！");
        }).catch(()=>{
            console.log("SW 服务启动失败！");
        });
    });
}
