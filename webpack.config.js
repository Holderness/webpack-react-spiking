var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var path = require('path');

module.exports = {
    context: __dirname,
    watch: true,
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      "webpack/hot/dev-server",
      path.resolve(__dirname, "./public/js/entry.js"),
    ],
    output: {
        path: path.resolve(__dirname, "./public/build"),
        filename: "bundle.js",
        publicPath: "/public/build/"
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
              test: /\.jsx?$/, 
              exclude: /node_modules/, 
              loader: 'babel-loader',
              query: {presets: ['es2015', 'react'] }
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
            proxy: 'localhost:8080',
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












