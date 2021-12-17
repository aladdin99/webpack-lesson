const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                    "style-loader",
                    "css-loader"
                ]
            },
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                // 删除空格行
                collapseWhitespace: true,
                // 删除注释行
                removeComments: true
            }
        }),
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, 'build'),
        },
        compress: true,
        port: 3000,
        open: true
    },
    mode: "development"
}