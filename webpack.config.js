var path = require('path');
var webpack = require('webpack');
var debug = process.env.NODE_ENV !== "production";

module.exports = {
    context: path.join(__dirname, "react"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: debug?['./index.jsx']:['./index.jsx'],
    output: debug? {
        path: path.join(__dirname, "react", "public"),
        publicPath: "/public/",
        filename: 'bundle.js'
    }:{
        path: path.join(__dirname, "app", "assets", "javascripts", "react"),
        publicPath: "/public/assets/",
        filename: 'bundle.js'
    },
    module: { 
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap',
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
            },
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],

};