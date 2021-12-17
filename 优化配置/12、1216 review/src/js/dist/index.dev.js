"use strict";

require("../css/index.css");

var _hotTest = require("./hotTest");

var _app = _interopRequireDefault(require("./app.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 1、使用 jquery 的 cdn
console.log($);
Vue.config.productionTip = false;
new Vue({
  render: function render(h) {
    return h(_app["default"]);
  }
}).$mount('#app'); // 使用 PWA 技术

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      console.log('service-worker is success!!!');
    })["catch"](function () {
      console.log('service-worker is failed!!!');
    });
  });
} // 懒加载与预加载


var BtnEvn = document.getElementById('Btn');

BtnEvn.onclick = function () {
  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./add.js'));
  }).then(function (_ref) {
    var add = _ref.add,
        mul = _ref.mul;
    console.log(add);
    console.log('求和的结果：', add(2, 4));
    console.log('乘法的结果：', mul(2, 4));
  })["catch"](function (err) {
    console.log(err);
  });
}; // HMR 热模块替换


console.log('---热模块替换---');
console.log(module);

if (module.hot) {
  module.hot.accept('./hotTest.js', function () {
    (0, _hotTest.rudu)();
  });
}