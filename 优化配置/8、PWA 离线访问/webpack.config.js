const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

// (1) 安装 workbox-webpack-plugin
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/[name][contenthash:5].js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true,
                        }
                    } 
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

        // （2）配置 WorkerboxWebpackPlugin 插件
        new WorkboxWebpackPlugin.GenerateSW({
            /**
             *  1、帮助 serviceWorker 快速启动
             *  2、删除旧的 serviceWork 
            **/
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, "public")
        },
        compress: true,
        port: 3000,
        hot: true
    },
    mode: "production",
}