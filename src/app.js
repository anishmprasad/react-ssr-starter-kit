import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './App/AppRoot';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import reducers from "../src/redux/reducer";

const isBrowser = (typeof window !== 'undefined');

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__
console.log(' window.__PRELOADED_STATE__', window.__PRELOADED_STATE__)
// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(
  reducers,
  preloadedState,
  compose(
    applyMiddleware(thunk, ReduxPromise),
    isBrowser && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('react-root')
	);
}

render(AppRoot);

if (module.hot) {
	module.hot.accept('./App/AppRoot.js', () => {
		const NewAppRoot = require('./App/AppRoot.js').default;
		render(NewAppRoot);
	});
}
