import $ from "jquery"

console.log($);

const BTN = document.getElementById('btn');

BTN.onclick = function(){
    /**
     * 懒加载：当文件需要时才加载。就是被界面上的事件触发后再进行加载。（需要在事件的回调内加载）
     * 预加载：webpackPrefetch 提前加载。就是在其它资源加载完成之后，空闲状态下加载的。
     * 
     * 预加载与正常加载的区别：不会造成资源请求阻塞。
     * 懒加载和预加载的前提都是基于代码分割（code-split）
     */
    import(/* webpackChunkName: 'test'*/ "./test.js").then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log();
    })
};

