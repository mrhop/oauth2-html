var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

//basic framework
const vendorJs = [
    'react',
    'react-dom',
    'react-router',
    'react-router-redux',
    'redux',
    'react-redux',
    'redux-thunk',
    'react-intl',
    __dirname + '/node_modules/react-intl/locale-data/en',
    __dirname + '/node_modules/react-intl/locale-data/zh',
    __dirname + '/workspace/js/modules/common/containers/Root.js',
    __dirname + '/workspace/js/modules/common/middleware/index.js',
    __dirname + '/workspace/js/modules/common/store/configureStore.js',
    './scss/basic.scss'
];
//tools like utilfun,lodash
const toolsJs = [
    'classnames',
    'normalizr',
    'humps',
    //__dirname + '/node_modules/isomorphic-fetch/fetch-npm-node.js',
    'lodash/merge',
    'lodash/map',
    'lodash/assign',
    __dirname + '/workspace/js/util/utilFun',
];
const commonComponentsJs = [
    'react-select',
    'rd3',
    __dirname + '/workspace/js/modules/common/customScrollbar/customScrollbar.jsx',
    __dirname + '/workspace/js/modules/common/layout/layout.jsx',
    __dirname + '/workspace/js/modules/common/modal/modal.jsx',
    __dirname + '/workspace/js/modules/common/panel/panel.jsx',
    __dirname + '/workspace/js/modules/common/responsiveCharts/responsiveCharts.jsx',
    __dirname + '/workspace/js/modules/common/tab/tab.jsx',
    __dirname + '/workspace/js/modules/common/table/table.jsx',
    __dirname + '/workspace/js/modules/common/toast/toast.jsx'];
var moduleAll = new Object({'vendor': vendorJs, 'tools': toolsJs, 'common-components': commonComponentsJs});

var walk = function (dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            results.push(file);
        }
    });
    return results;
};
var regexp = /[\s\S]*(\/|\\)(common|include|data)(\/|\\)[\s\S]*/;
walk(__dirname + '/workspace/js/modules').forEach(function (file) {
    if (!file.match(regexp) && (file.endsWith('.js') || file.endsWith('.jsx'))) {
        var arr = file.split(/(\/|\\)(modules)(\/|\\)/);
        file = arr[arr.length - 1];
        if (file.split(/(\/|\\)/).length <= 3) {
            var moduleName = 'modules/' + file.replace(file.replace(/^.*[\\\/]/, ''), '');
            moduleName = moduleName.substring(0, moduleName.length - 1);
            moduleAll[moduleName] = ( './js/modules/' + file).replace(/[\\]/, '/');
            console.log(moduleAll[moduleName]);
        }
    }
});
module.exports = {
    //devtool: process.env.NODE_ENV === 'production' ? null : 'cheap-module-eval-source-map',
    context: path.join(__dirname, 'workspace'),
    entry: moduleAll,
    output: {
        path: __dirname + '/build',
        filename: 'js/[name].js',
        // publicPath: '/'
    }
    ,
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        outputPath: path.join(__dirname, 'build'),
        hot: true
    }
    ,
    module: {
        loaders: [
            {
                test: /(?!basic)\.scss$/,
                loaders: ['style', 'css', 'sass']
            }, {
                test: /basic\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass', {
                    publicPath: '../'
                })
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules|bower_components)/,
                //loader: 'file'
                loaders: ['url-loader?limit=8192&name=./[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, 'workspace'),
                    'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff&name=./[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, 'workspace')
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=./[path][name]-[hash].[ext]&context=' + path.resolve(__dirname, 'workspace')
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-2']
            }
        ]
    }
    ,
    plugins: [
        //basic framework
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common-components', 'tools', 'vendor'],
            minChunks: Infinity
        }),
        new webpack.ProvidePlugin({
            'React': 'react',
            'ReactDOM': 'react-dom',
            'ReactRouter': 'react-router',
            'ReactRouterRedux': 'react-router-redux',
            'Redux': 'redux',
            'ReactRedux': 'react-redux',
            'ReduxThunk': 'redux-thunk',
            'ReactIntl': 'react-intl',
            'ReactIntlEn': __dirname + '/node_modules/react-intl/locale-data/en',
            'ReactIntlZh': __dirname + '/node_modules/react-intl/locale-data/zh',
            'Select': 'react-select',
            'rd3': 'rd3',
            'classNames': 'classnames',
            'normalizr': 'normalizr',
            'l_merge': 'lodash/merge',
            'l_map': 'lodash/map',
            'l_assign': 'lodash/assign',
            'humps': 'humps',
            'UtilFun': __dirname + '/workspace/js/util/utilFun',
            'RootContainer': __dirname + '/workspace/js/modules/common/containers/Root.js',
            'MiddleWare': __dirname + '/workspace/js/modules/common/middleware/index.js',
            'CustomScrollbar': __dirname + '/workspace/js/modules/common/customScrollbar/customScrollbar.jsx',
            'Layout': __dirname + '/workspace/js/modules/common/layout/layout.jsx',
            'Modal': __dirname + '/workspace/js/modules/common/modal/modal.jsx',
            'Panel': __dirname + '/workspace/js/modules/common/panel/panel.jsx',
            'ResponsiveCharts': __dirname + '/workspace/js/modules/common/responsiveCharts/responsiveCharts.jsx',
            'ConfigureStore': __dirname + '/workspace/js/modules/common/store/configureStore.js',
            'Tab': __dirname + '/workspace/js/modules/common/tab/tab.jsx',
            'Table': __dirname + '/workspace/js/modules/common/table/table.jsx',
            'Toast': __dirname + '/workspace/js/modules/common/toast/toast.jsx',
        }),
        new ExtractTextPlugin('./css/[name].css', {
            allChunks: true
        }),
        new CopyWebpackPlugin(
            [{from: 'html/**/*'},
                {from: '*.html'}, {from: 'demoData/**/*'}]
        ),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
    ],
}
;