import React from 'react';
import { Route } from 'react-router';

export default function Status({ code }) {
	return (
		<Route
			render={({ staticContext }) => {
				if (staticContext) {
					staticContext.status = code;
				}
				return null;
			}}
		/>
	);
}
