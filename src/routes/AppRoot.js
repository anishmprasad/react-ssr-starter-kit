import 'babel-polyfill';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const { pathname } = window.location;
		const isEn = pathname.substr(1, 2) === 'en' && 'en';
		const isDe = pathname.substr(1, 2) === 'de' && 'de';
		const currentLang = isEn || isDe || 'en';
		return (
			<Router>
				<Routes lang={navigator && currentLang} />
			</Router>
		);
	}
}
