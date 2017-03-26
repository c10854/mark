var webpack = require('webpack');
var path = require('path');
var ExtracTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = function (env) {
    return {
        // 入口文件
        entry: {
            main: './src/index.js',
            vendor: 'moment'
        },
        // 输出位置
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        resolve: {
            // 设置什么目录会被搜索
            modules: [
                "node_modules"
            ],
            extensions: [".js"],
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ExtracTextPlugin.extract({
                        use: 'css-loader'
                    })
                },
                {
                    test: /\.jsx$/,
                    loader: "babel-loader",
                }
            ]
        },
        plugins: [
            // 独立打包
            new ExtracTextPlugin('styles.css'),
            // 设置常用固定文件打包位置
            new webpack.optimize.CommonsChunkPlugin({
                name: ['vender', 'manifest']
            }),
            new HtmlWebpackPlugin({
                template: './index.html'
            })
        ]
    }
}