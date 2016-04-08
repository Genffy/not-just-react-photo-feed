var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
	entry: {
		basic: "./src/basic/app.js",
		// react: "./src/react/app.js",
		// ng: "./src/angular/app.js",
		// ng2: "./src/angular2/app.js",
		// vue: "./src/vue/app.js"	
	},
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js",
        path: path.join(__dirname, 'debug'),
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                loader: 'babel',
                query: {
                    presets:  ["react", "es2015", "stage-0", "react-hmre"]
                },
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css/,
                include: path.join(__dirname, 'src'),
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
            }
        ]
    }
}