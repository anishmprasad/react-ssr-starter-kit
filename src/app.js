import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import ReduxPromise from 'redux-promise';
import reducers from './redux/reducer';
import AppRoot from './routes/AppRoot';

const NewAppRoot = require('./routes/AppRoot.js').default;

const isBrowser = typeof window !== 'undefined';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.PRELOADED_STATE;
// console.log(' window.PRELOADED_STATE, window.PRELOADED_STATE)
// Allow the passed state to be garbage-collected
delete window.PRELOADED_STATE;

// Create Redux store with initial state
const store = createStore(
	reducers,
	preloadedState,
	compose(
		applyMiddleware(thunk),
		// eslint-disable-next-line no-underscore-dangle
		isBrowser && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
}

render(AppRoot);

if (module.hot) {
	module.hot.accept('./routes/AppRoot.js', () => {
		render(NewAppRoot);
	});
}
