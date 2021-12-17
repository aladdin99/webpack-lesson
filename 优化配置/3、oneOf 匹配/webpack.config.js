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
                test: /\.js$/,
                enforce: "pre", // 优先处理
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
                            "style-loader",
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
                            ]
                        }
                    }
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
    devtool: "inline-source-map",
    mode: "development"
}