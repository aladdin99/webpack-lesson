import $ from "jquery"

console.log($);

const BTN = document.getElementById('btn');

BTN.onclick = function(){
    import(/* webpackChunkName: 'test'*/ "./test.js").then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log();
    })
};


// （3）PWA 的 serviceWorker 服务配置。
if("serviceWorker" in navigator){
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('./service-worker.js').then(()=>{
            console.log("sw 注册成功！");
        }).catch(()=>{
            console.log("sw 注册失败！");
        });
    })
}

