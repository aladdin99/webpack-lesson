const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin  = require('vue-loader/lib/plugin'); // 解析 .vue文件 插件
const WorkboxWebpackPlugin = require("workbox-webpack-plugin"); // pwa离线访问


module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/main.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },{
                test: /\.js$/,
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: 3, // 开启2个进程
                        }
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        corejs: {
                                            version: 3
                                        },
                                        targets: {
                                            chrome: "60",
                                            firefox: "50"
                                        }
                                    }
                                ]
                            ],
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

        // 解析 .vue 文件
        new VueLoaderPlugin(),

        // pwa离线访问插件
        new WorkboxWebpackPlugin.GenerateSW({
            // 帮助 serviceWorker 快速启动
            clientsClaim: true,
            // 删除旧的 serviceWork
            skipWaiting: true
        }),
    ],
    externals: {
        vue: "Vue",
        jquery: "jQuery"
    },
    devServer: {
        static: {
            directory: resolve(__dirname, "public")
        },
        compress: true,
        open: true,
        port: 8090,
        hot: true
    },
    mode: "production"
}