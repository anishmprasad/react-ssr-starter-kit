import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
// import accepts from 'accepts';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { matchPath } from 'react-router-dom';
import extractLocalesFromReq from '../client-locale/extractLocalesFromReq';
import guessLocale from '../client-locale/guessLocale';

// import { createStore } from 'redux'

import mainroutes from '../routes/MainRoutes';
import reactRouterToArray from './routeHelper';
import Router from '../routes/Routes';
// import qs from 'qs' // Add this at the top of the file
// import reducers from '../redux/reducer'
// import devTools from 'remote-redux-devtools';

// import { applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '../reducer';
// import ReduxPromise from 'redux-promise';

// import request from 'request';
import createStore from '../redux/store/store';

console.log(mainroutes);

// import { InitialAction } from '../redux/actions/initialAction';

export default ({ clientStats }) => (req, res) => {
	const userLocales = extractLocalesFromReq(req);
	let lang = guessLocale(['de', 'en'], userLocales, 'en');

	if (req.originalUrl.substr(1, 2) === 'de') {
		lang = 'de';
	}
	if (req.originalUrl.substr(1, 2) === 'en') {
		lang = 'en';
	}
	const store = createStore();

	// store.dispatch(initializeSession());

	// Grab the initial state from our Redux store
	const context = {};
	const routes = Array.isArray(mainroutes) ? mainroutes : mainroutes();
	console.log('reactRouterToArray', reactRouterToArray(routes), req.url);
	const dataRequirements = reactRouterToArray(routes)
		.filter(route => {
			console.log(matchPath(req.url, route));
			return matchPath(req.url, route);
		}) // filter matching paths
		.map(route => {
			console.log(route.component);
			return route.component;
		}) // map to components
		.filter(comp => {
			if (comp.getInitialBeforeRender) return comp.getInitialBeforeRender;
			return comp;
		}) // check if components have data requirement
		.map(comp => {
			if (comp.getInitialBeforeRender) return store.dispatch(comp.getInitialBeforeRender());
			return Promise.resolve(comp);
		}); // dispatch data requirement
	console.log('dataRequirements', dataRequirements);
	Promise.all(dataRequirements).then(() => {
		const app = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<Router context={context} lang={lang} />
				</StaticRouter>
			</Provider>
		);

		const preloadedState = store.getState();
		const helmet = Helmet.renderStatic();

		const { js, styles, cssHash } = flushChunks(clientStats, {
			chunkNames: flushChunkNames()
		});

		const status = context.status || 200;

		if (context.status === 404) {
			console.log('Error 404: ', req.originalUrl);
		}

		if (context.url) {
			const redirectStatus = context.status || 302;
			res.redirect(redirectStatus, context.url);
			return;
		}
		res.status(status).send(
			`<!doctype html><html><head>${styles}${
				helmet.title
			}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div>${js}${cssHash}</body><script>window.PRELOADED_STATE = ${JSON.stringify(
				preloadedState
			).replace(/</g, '\\u003c')}</script></html>`
		);
	});
};
