const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    devServer: {
        static: {
            directory: resolve(__dirname, 'public'),
        },
        compress: true,
        port: 3003,
        open: true,
        hot: false,
    },

    // source-map 技术
    // devtool: "source-map", 
    devtool: "inline-source-map",
    // devtool: "hidden-source-map", // 隐藏源代码
    // devtool: "nosources-source-map", // 隐藏源代码

    // devtool: "eval-source-map",

    mode: "development"
}