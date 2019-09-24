import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class DefaultLayout extends Component {
	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
}
