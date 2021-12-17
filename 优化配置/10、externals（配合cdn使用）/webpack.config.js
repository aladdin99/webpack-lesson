const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/[name][contenthash:5].js",
        path: resolve(__dirname, "build")
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
    // 拒绝一些包被打包进来。例如：jquery、vue、react等。
    externals: {
        // 拒绝 jQuery 被打包进来
        // [name]: 包名
        jquery: "jQuery"
    },
    mode: "production",
}