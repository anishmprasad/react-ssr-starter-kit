import axios from 'axios';

import { SAMPLEDATA, UPDATEINPUT, USERINFO } from '../actionTypes/sample';

import createActionWithTypeAndPayload from './commonAction';

export function sampleAction() {
	const url = 'https://jsonplaceholder.typicode.com/posts';
	return function(dispatch) {
		axios.get(url).then(response => {
			dispatch(createActionWithTypeAndPayload(SAMPLEDATA, response));
		});
	};
}

export function inputUpdateAction(value) {
	return function(dispatch) {
		dispatch(createActionWithTypeAndPayload(UPDATEINPUT, value));
	};
}

export function userInfoAction() {
	const url = 'https://api.myjson.com/bins/17j42z';
	return function(dispatch) {
		axios.get(url).then(response => {
			dispatch(createActionWithTypeAndPayload(USERINFO, response));
		});
	};
}
