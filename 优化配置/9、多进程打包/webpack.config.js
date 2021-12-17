const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

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
                exclude: /(node_module)/,
                use: [
                    // 开启多进程打包（哪里需要多进程打包，three-loader就放在哪里。）
                    // 默认配置的情况下，会根据CPU的核数减一。
                    /**
                     * 进程启动大概为 600ms 左右,进程通信也有开销。
                     * 只有工作消耗时间比较长，才需要多进程打包。
                     * */
                   {
                        loader:  "thread-loader",
                        options: {
                            workers: 2, // 开启2个进程
                        }
                   },
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [ // 预设
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
                ],
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
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