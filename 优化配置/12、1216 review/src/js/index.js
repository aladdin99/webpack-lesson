import '../css/index.css';
import { rudu } from './hotTest'; // 2、使用 vue 的 cdn

import app from './app.vue'; // 1、使用 jquery 的 cdn

console.log($);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(app),
}).$mount('#app'); // 使用 PWA 技术

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').then(() => {
      console.log('service-worker is success!!!');
    }).catch(() => {
      console.log('service-worker is failed!!!');
    });
  });
} // 懒加载与预加载


const BtnEvn = document.getElementById('Btn');

BtnEvn.onclick = function () {
  import(
  /* webpackChunkName: 'add', webpackPrefetch: true */
    './add.js'
  ).then(({
    add,
    mul,
  }) => {
    console.log(add);
    console.log('求和的结果：', add(2, 4));
    console.log('乘法的结果：', mul(2, 4));
  }).catch((err) => {
    console.log(err);
  });
}; 

// HMR 热模块替换
console.log('---热模块替换---');
console.log(module);

if (module.hot) {
  module.hot.accept('./hotTest.js', () => {
    rudu();
  });
}
