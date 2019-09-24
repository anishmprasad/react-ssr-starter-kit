import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
// import accepts from 'accepts';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import { matchPath } from 'react-router-dom';

import topLevelRoutes from '../routes/MainRoutes';
import reactRouterToArray from './routeHelper';
import Router from '../routes/Routes';

// import { applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducer from '../reducer';
// import ReduxPromise from 'redux-promise';

// import request from 'request';
import createStore from '../redux/store/store';

// import { InitialAction } from '../redux/actions/initialAction';

export default ({ clientStats }) => (req, res) => {
	const store = createStore();

	// store.dispatch(initializeSession());

	// Grab the initial state from our Redux store
	const context = {};
	const routes = topLevelRoutes;
	// console.log('reactRouterToArray', reactRouterToArray(routes), req.url);
	const dataRequirements = routes
		.filter(route => {
			console.log(matchPath(req.url, route));
			return matchPath(req.url, route);
		}) // filter matching paths
		.map(route => {
			return route.component;
		}) // map to components
		.filter(component => {
			if (component.getInitialBeforeRender) return component.getInitialBeforeRender;
			return component;
		}) // check if components have data requirement
		.map(component => {
			if (component.getInitialBeforeRender) return store.dispatch(component.getInitialBeforeRender());
			return Promise.resolve(component);
		}); // dispatch data requirement
	Promise.all(dataRequirements).then(() => {
		const app = renderToString(
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<Router context={context} />
				</StaticRouter>
			</Provider>
		);

		console.log('app', app);
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
			}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="root">${app}</div>${js}${cssHash}</body><script>window.PRELOADED_STATE = ${JSON.stringify(
				preloadedState
			).replace(/</g, '\\u003c')}</script></html>`
		);
	});
};
