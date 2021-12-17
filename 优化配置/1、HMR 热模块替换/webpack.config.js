const HtmlWebpackPlugin = require("html-webpack-plugin");
const {resolve} = require("path");

module.exports = {
    /* 1. html文件：默认不能使用 HMR 功能，同时会导致的问题：html文件不能热更新~
            解决： 修改 entry配置，将 html文件 引入。(会导致全局刷新，还不是 HMR 功能。)
    */
    entry: ["./src/js/index.js"],
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 2、CSS文件：style-loader中自带热模块替换功能。
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
        // 开启 HMR 热模块替换功能。
        hot: true,
    },
    mode: "development"
}