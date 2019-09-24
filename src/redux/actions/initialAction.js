import axios from 'axios';

import { INITIAL_DATA } from '../actionTypes/userInfo';
import createActionWithTypeAndPayload from './commonAction';

export function InitialAction() {
	// const url = 'https://anishmprasad.com/sample.json';
	const url = 'https://api.myjson.com/bins/xurfd';
	return function (dispatch) {
		const initialAction = axios
			.get(url)
			.then((response) => {
				dispatch(createActionWithTypeAndPayload(INITIAL_DATA, response));
				return Promise.resolve(response);
			})
			.catch(error => Promise.reject(error));
		return Promise.resolve(initialAction);
	};
}
