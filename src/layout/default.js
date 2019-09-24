import React, { Component } from 'react';
import Nav from '../components/Nav';

export default function DefaultLayout(props) {
	return (
		<div>
			<Nav />
			{props.children}
		</div>
	);
}
