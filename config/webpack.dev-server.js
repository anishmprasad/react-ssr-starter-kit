const path = require('path');
const webpack = require('webpack');
const externals = require('./node-externals');

module.exports = {
	name: 'server',
	target: 'node',
	externals,
	entry: './src/server/render.js',
	mode: 'development',
	output: {
		filename: 'dev-server-bundle.js',
		chunkFilename: '[name].chunk.js',
		path: path.resolve(__dirname, '../build'),
		libraryTarget: 'commonjs2'
	},
	optimization: {
		splitChunks: {
			name: false,
			cacheGroups: {
				vendors: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all',
					minChunks: 1,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'css-loader/locals',
						options: {
							modules: true,
							localIdentName: '[name]__[local]--[hash:base64:5]',
							minimize: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss'
						}
					}
				]
			},
			{
				test: /\.(jpg|svg|png|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '/images/[name].[ext]',
							emitFile: false
						}
					}
				]
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'markdown-with-front-matter-loader'
					}
				]
			}
		]
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development')
			}
		})
	]
};
