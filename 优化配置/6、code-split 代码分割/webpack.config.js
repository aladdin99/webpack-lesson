const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");

module.exports = {
    // entry: {
    //     main: "./src/js/index.js",
    //     test: "./src/js/test.js"
    // },
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
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    mode: "production",
}