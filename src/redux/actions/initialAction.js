import fetch from 'isomorphic-fetch';
import axios from 'axios';

import { INITIAL_DATA } from '../actionTypes/userInfo';
import createActionWithTypeAndPayload from './commonAction';

export function fetchCircuits() {
	// http://ergast.com/api/f1/2018/circuits.json
	return fetch('http://ergast.com/api/f1/2018/circuits.json')
		.then(res => res.json())
		.then(res => res);
}

export function InitialAction() {
	const url = 'http://ergast.com/api/f1/2018/circuits.json';
	return function(dispatch) {
		const initialAction = axios
			.get(url)
			.then(response => {
				dispatch(createActionWithTypeAndPayload(INITIAL_DATA, response));
				return Promise.resolve(response);
			})
			.catch(error => Promise.reject(error));
		return Promise.resolve(initialAction);
	};
}
