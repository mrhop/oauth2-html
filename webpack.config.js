var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require('fs');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');


const vendorJs = [  './js/modules/include/dashBoard/dashBoard.jsx', './scss/basic.scss']
var moduleAll = new Object({'vendor': vendorJs});

var walk = function (dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function (file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}

var regexp = /[/s/S]*(\/|\\)(common|include|data)(\/|\\)[/s/S]*/
walk(__dirname + '/workspace/js/modules').forEach(function (file) {
    if (!file.match(regexp) && (file.endsWith(".js") || file.endsWith(".jsx"))) {
        var arr = file.split(/(\/|\\)(modules)(\/|\\)/);
        file = arr[arr.length - 1];
        var moduleName = 'modules/' + file.replace(file.replace(/^.*[\\\/]/, ''), '');
        moduleName = moduleName.substring(0, moduleName.length - 1);
        moduleAll[moduleName] = ( './js/modules/' + file).replace(/[\\]/, '/');
        console.log(moduleAll[moduleName]);
    }
})

module.exports = {
    context: path.join(__dirname, 'workspace'),
    entry: moduleAll,
    output: {
        path: __dirname + '/build',
        filename: "js/[name].js",
        publicPath: "/"
    },
    devServer: {
        contentBase:path.join(__dirname, 'build'),
        outputPath:path.join(__dirname, 'build'),
        hot: true
    },
    module: {
        loaders: [
            {
                test: /(?!basic|index)\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /basic\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass',{publicPath: "../"})
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                //loader: 'file'
                loaders: ['url-loader?limit=8192&name=[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, "workspace"),
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, "workspace")
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, "workspace")
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            "React": 'react',
            "ReactDOM": 'react-dom',
            "ReactIntl":'react-intl',
            "ReactIntlEn":__dirname+'/node_modules/react-intl/locale-data/en',
            "ReactIntlZh":__dirname+'/node_modules/react-intl/locale-data/zh',
            "UtilFun":__dirname+'/workspace/js/util/utilFun',
            "BaseComponent":__dirname+'/workspace/js/modules/common/baseComponent.jsx'
        }),
        new ExtractTextPlugin('./css/[name].css', {
            allChunks: true
        }),
        new CopyWebpackPlugin(
            [{from: 'html/**/*'},
                {from: '*.html'}]
        )]
};