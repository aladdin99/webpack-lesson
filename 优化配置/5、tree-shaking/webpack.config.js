const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { resolve } = require("path");

/*
    tree shaking：去除无用代码
        前提：1、必须使用 ES6 模块 
              2、开启 production 环境
        作用：减少代码体积
*/

process.env.NODE_ENV = "production"
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
                ],
               
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "css/built[contenthash:5].css"
        }),
        new OptimizeCssAssetsPlugin()
    ],
    devtool: "source-map",
    devServer: {
        static: {
            direcctory: resolve(__dirname, 'public')
        },
        compress: true,
        open: true,
        hot: true,
        port: 3000
    },
    mode: "production",
}