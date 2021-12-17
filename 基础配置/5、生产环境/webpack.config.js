const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
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
                test: /\.js$/,
                exclude: /(node_module)/,
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
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new MiniCssExtractPlugin({
            filename: "css/main.css"
        }),
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, 'public'),
        },
        compress: true,
        port: 8080,
        open: true
    },
    mode: "production"
}