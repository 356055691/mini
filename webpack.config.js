const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const shelljs = require('shelljs');
const _ = require('lodash');

let entry = {};
let cssArr = [];
let jsArr = [];

cssArr.push(path.join(__dirname, `/public/scss/*.scss`));
jsArr.push(path.join(__dirname, `/public/js/*.js`));

shelljs.ls(cssArr).forEach((val) => {
    let name = _.slice(val.split('/'), -1)[0];

    entry[name] = val;
});

shelljs.ls(jsArr).forEach((val) => {
    let name = _.slice(val.split('/'), -1)[0];

    name = name.split('.')[0];
    entry[name] = val;
});

module.exports = {
    entry: entry, // 入口文件
    output: { // 输出文件
        filename: '[name].js', // 输出文件名
        path: path.join(__dirname, '/public/build/js') // 输出文件路径
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('../css/[name]').replace('.scss', '.css');
            },
            allChunks: true
        }),
        new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false
                },
                comments: false
            }
        })
    ]
};
