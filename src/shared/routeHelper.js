
import React from 'react';
import universal from 'react-universal-component';
import Loading from '../components/Loading';
// import { Route, Switch, Redirect } from "react-router";

export default function UniversalComponent(props) {
	return(
		universal(
			() => import(`../Views/${props.page}`),
			{
				loading: () => <Loading />
			}
		)
	)
}