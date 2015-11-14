var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
    watch: true,
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      "webpack/hot/dev-server",
      "./entry.js",
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        preLoaders: [
            { test: /\.json$/, exclude: /node_modules/, loader: 'json'},
        ],
        loaders: [
            { 
              test: /\.html$/, 
              loaders: ['html-loader'],
            },
            {
              test: /\.less$/,
              loader: "style-loader!css-loader!less-loader",
            },
            { 
              test: /\.js$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader',
              query: {compact: false}
            },
            { 
              test: /\.jsx$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader',
              query: {compact: false}
            },
            { 
              test: /\.css$/, 
              loader: "style!css"
            }
        ]
    },
    resolve: {
        root: __dirname,
        alias: {},
        extensions: ['', '.js', '.jsx', '.less', '.html'],
    },
    plugins: [
        new BrowserSyncPlugin({
            proxy: 'localhost:3000',
        },
        {
            callback: function () {
              console.log('browserSync started!');
            },
            reload: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};

module.exports.params = {
    hot: true,
    stats: {colors: true},
    inline: true,
};












