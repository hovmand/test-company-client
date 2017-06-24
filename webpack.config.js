var path = require('path');
var webpack = require('webpack');

var PUBLIC_PATH = '/assets/';
var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build' + PUBLIC_PATH);

const environment = process.env.NODE_ENV || 'development'

const plugins = [
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(environment),
		}
	}),
]

module.exports = {
	context: APP_DIR,
	entry: {
		app: './app.js',
	},
	output: {
		path: BUILD_DIR,
		publicPath: PUBLIC_PATH,
		filename: 'bundle.js',
	},
	plugins,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/],
				use: [
					'babel-loader',
				],
			}
		],
	},
	devServer: {
		historyApiFallback: {
			index: 'index.html',
		},
		port: 5678,
	},
};
