const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/[name][contenthash].js", // contenthash 实现缓存
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //        {
            //         loader: "eslint-loader",
            //         options: {
            //             fix: true
            //         }
            //        }
            //     ]
            // },
            {
                // 解析 .vue 插件
                test: /\.vue/,
                loader: "vue-loader"
            },
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            MiniCssExtractPlugin.loader,
                            "css-loader"
                        ]
                    },
                    {
                        test: /\.js$/,
                        use: [
                            {
                                loader: "thread-loader",
                                options: {
                                    workers: 2, // 开启2个进程
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
                                                    versions: 3
                                                },
                                                targets: {
                                                    chrome: 96, // 浏览器版本
                                                    firefox: 60
                                                }
                                            }
                                        ]
                                    ],
                                    cacheDirectory: true, // 开启 babel 缓存
                                }
                            }
                        ]
                    }
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),

        // 解析 .vue 插件
        new VueLoaderPlugin(),


        // 使用PWA
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        

        // 提取 css 资源
        new MiniCssExtractPlugin({
            filename: "css/[name][contenthash].css" // contenthash 实现缓存
        }),

        // 压缩 css 资源
        new optimizeCssAssetsWebpackPlugin(),
    ],

    // 设置不需要打包的module资源
    externals: {
        jquery: "jQuery",
        Vue: "Vue"
    },

    // code-split 代码分割
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },

    devtool: "source-map",

    devServer: {
        static: {
            directory: resolve(__dirname, "build")
        },
        compress: true,
        port: 3003,
        hot: true,
        open: true
    },
    mode: "production"
}