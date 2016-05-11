var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');


const basicJs = ['./js/dev/basic.js', './scss/basic.scss']
var moduleAll = new Object({'basic': basicJs});

module.exports = {
    context: path.join(__dirname, 'template'),
    entry: moduleAll,
    output: {
        path: __dirname + '/template',
        filename: "js/[name].js",
        publicPath: "/"
    },
    devServer: {
        contentBase:path.join(__dirname, 'template'),
        outputPath:path.join(__dirname, 'template'),
        hot: true
    },
    module: {
        loaders: [{
                test: /basic\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass',{publicPath: "../"})
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                //loader: 'file'
                loaders: ['url-loader?limit=8192&name=[path][name].[ext]&context=' + path.resolve(__dirname, "template"),
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[path][name].[ext]&context=' + path.resolve(__dirname, "template")
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=[path][name].[ext]&context=' + path.resolve(__dirname, "template")
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./css/[name].css', {
            allChunks: true
        })
    ]
};