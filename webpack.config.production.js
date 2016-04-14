var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    
    entry: {
        app: ["./src/app.js"],
        vendors: ['react', 'react-dom','jquery','flux','events']
    },
    output: {
        path: path.join(__dirname, 'static'),
        filename: '[name].min.js',
        publicPath: '/static/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                query: {
                    presets: ["react", "es2015", "stage-0"]
                },
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                include: path.join(__dirname, 'src'),
                loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings: false
            },
            sourceMap: false,
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.min.js',Infinity),
        new ExtractTextPlugin("styles.css"),
    ]
}