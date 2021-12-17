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
    mode: "production",
}