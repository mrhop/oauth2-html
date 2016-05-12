var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var fs = require('fs');

const basicJs = ['./js/dev/basic.js', './scss/basic.scss']
var moduleAll = new Object({'basic': basicJs});
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

walk(__dirname + '/template/js/dev/modules').forEach(function (file) {
    if (file.endsWith(".js") || file.endsWith(".jsx")) {
        var arr = file.split(/(\/|\\)(modules)(\/|\\)/);
        file = arr[arr.length - 1];
        console.log(file)
        var moduleName = 'modules/' + file.replace(/\.(js|jsx)/, '');
        console.log(file.replace(/^.*[\\\/]/, ''))

        console.log(moduleName)
        moduleAll[moduleName] = ( './js/dev/modules/' + file).replace(/[\\]/, '/');
        console.log(moduleName+'--'+moduleAll[moduleName]);
    }
})

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
            },
            ,
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: [ 'babel?presets[]=es2015,presets[]=react']
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "basic",
            minChunks: Infinity
        }),
        new ExtractTextPlugin('./css/[name].css', {
            allChunks: true
        })
    ]
};