var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// Source maps help for debugging,
	// 	since we're minimizing and compressing our code.
	// Source maps keep tabs on where
	// 	bundled code is relative to the source code
	devtool: 'cheap-eval-source-map',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		//Built in webpack plugins that minimize and optimize our code
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		new HtmlWebpackPlugin({
			/*
				Webpack will generate a index.html file into the output
				with the contents of /src/index.html slightly
				modified to include our modules
			*/
			template: './src/index.html'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		})
	],
	module: {
		loaders: [{
			test: /\.js$/,
			loaders: ['babel'],
			// loader: 'babel?presets[]=react,presets[]=es2015',
			//presets defined in .babelrc file
			include: path.join(__dirname, 'src')
		},
		{
			test: /\.css$/,
			loaders: ['style', 'css'],
			include: path.join(__dirname, 'src')
		}]
	},
	devServer: {
		contentBase: './dist',
		hot: true
	}
};
