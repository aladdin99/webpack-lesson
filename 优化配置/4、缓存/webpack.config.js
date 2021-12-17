const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built[contenthash:5].js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            fix: true
                        }
                    }
                ]
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
                                            chrome: "60", // 兼容对应环境的
                                            firefox: "50"
                                        }
                                    }
                                ]
                            ],
                            // 开启 babel 缓存
                            // 第二次构建时，会读取之前的缓存。
                            cacheDirectory: true,
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
        new MiniCssExtractPlugin({
            filename: "css/built.[contenthash:5].css"
        }),
        new OptimizeCssAssetsPlugin(),
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, 'public'),
        },
        compress: true,
        port: 3003,
        open: true,
        hot: true,
    },
    devtool: "source-map",
    mode: "production"
}