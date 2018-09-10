import axios from 'axios';

import {
	SAMPLEDATA,
	UPDATEINPUT,
	USERINFO,
} from '../actionTypes/sample';

import createActionWithTypeAndPayload from './commonAction';

export function sampleAction() {
	console.log('sampleAction')
	const url = 'https://jsonplaceholder.typicode.com/posts';
	return function (dispatch) {
		axios.get(url)
			.then((response) => {
				dispatch(createActionWithTypeAndPayload(SAMPLEDATA, response));
			});
	};
}

export function inputUpdateAction(value) {
	return function (dispatch) {
		dispatch(createActionWithTypeAndPayload(UPDATEINPUT, value));
	};
}

export function userInfoAction() {
	const url = 'https://anishmprasad.com/sample.json';
	return function (dispatch) {
		axios.get(url)
			.then((response) => {
				dispatch(createActionWithTypeAndPayload(USERINFO, response));
			});
	};
}
