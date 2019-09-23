import express from 'express';
import cookieParser from 'cookie-parser';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import configDevClient from '../../config/webpack.dev-client';
import configDevServer from '../../config/webpack.dev-server';
import configProdClient from '../../config/webpack.prod-client';
import configProdServer from '../../config/webpack.prod-server';
// import path from "path";
const server = express();
server.use(cookieParser());

const expressStaticGzip = require('express-static-gzip');

// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 8081;
let isBuilt = false;

const done = () => {
	!isBuilt &&
		server.listen(PORT, () => {
			isBuilt = true;
			console.log(`Server listening on http://localhost:${PORT} in ${process.env.NODE_ENV}`);
		});
};

if (isDev) {
	const compiler = webpack([configDevClient, configDevServer]);

	const clientCompiler = compiler.compilers[0];
	// const serverCompiler = compiler.compilers[1];

	const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer);

	const webpackHotMiddlware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer);

	server.use(webpackDevMiddleware);
	server.use(webpackHotMiddlware);
	server.use(webpackHotServerMiddleware(compiler));
	console.log('Middleware enabled');
	done();
} else {
	webpack([configProdClient, configProdServer]).run((err, stats) => {
		const clientStats = stats.toJson().children[0];
		console.log(
			stats.toString({
				colors: true
			})
		);
		server.use(
			expressStaticGzip('dist', {
				enableBrotli: true
			})
		);
		// eslint-disable-next-line import/no-unresolved
		const render = require('../../build/prod-server-bundle.js').default;
		server.use(render({ clientStats }));
		done();
	});
}
