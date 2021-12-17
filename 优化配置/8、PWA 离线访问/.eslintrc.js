module.exports = {
  env: {
    browser: true, // 设置启用的环境，支持浏览器的全局变量
    node: true,
    commonjs: true,
    // es2021: true,
    es6: true, // 全局支持 es6语法（自动启用）
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 10, // 非全局支持 es10版语法（不自动启用）
  },
  plugins: [
    'vue',
  ],
  rules: {
    "eqeqeq": "off", // 不检测 === 语法
    "camelcase": 'off', // 不检测 驼峰语法
    "allowImportExportEverywhere": true, // 不限制eslint对import使用位置
    // "no-console": "off", // 不检测 console
  },
};
