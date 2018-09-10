import {
	createStore,
	applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducer';

export default initialState => createStore(reducers, initialState, applyMiddleware(thunkMiddleware));
