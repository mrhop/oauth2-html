var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var fs = require('fs');
const vendorJs = ['react', 'react-dom', 'react-intl', 'react-intl/locale-data/en', 'react-intl/locale-data/zh', './workspace/js/dev/util/utilFun', './workspace/js/dev/modules/common/baseComponent.jsx', './workspace/scss/basic1.scss']
var moduleJs = new Object({'vendor': vendorJs});

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
walk(__dirname + '/workspace/js/dev/modules').forEach(function (file) {
    if (!file.match(regexp) && (file.endsWith(".js") || file.endsWith(".jsx"))) {
        var arr = file.split(/(\/|\\)(modules)(\/|\\)/);
        file = arr[arr.length - 1];
        var moduleName = 'modules/' + file.replace(file.replace(/^.*[\\\/]/, ''), '');
        moduleName = moduleName.substring(0, moduleName.length - 1);
        moduleJs[moduleName] = ( './workspace/js/dev/modules/' + file).replace(/[\\]/, '/');
    }
})

module.exports = {
    entry: moduleJs,
    output: {
        path: __dirname + '/build/js',
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /(?!basic)\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /basic1\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                //loader: 'file'
                loaders:[ 'file?name=../assets/images/[name].[ext]',
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
                //loader: 'url?name=assets/images/[name].[ext]'
            },
            //{
            //    test: /\.(jpe?g|png|gif|svg)$/i,
            //    //loader: 'url?limit=8192'
            //    loader: 'url'
            //},
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
        new ExtractTextPlugin('../css/[name].css', {
            allChunks: true
        })
    ]
};