import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from "../Header";

import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';
import '../assets/css/globals.css';
// import RedirectWithStatus from '../Components/RedirectStatus';
// import Loading from '../Components/Loading';

import Routes from './MainRoutes';

function Router() {
	console.log('Router');
	return (
		<div>
			<Helmet>
				<link
					rel='shortcut icon'
					href='https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico'
					type='image/x-icon'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Isomorphic React Starter Kit</title>
			</Helmet>
			{/* <Nav /> */}
			<Switch>
				{/* <Routes /> */}
				{Routes.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						exact={route.exact}
						component={props => (
							<route.layout {...props}>
								<route.component {...props} />
							</route.layout>
						)}
					/>
				))}
				{/* {Routes.map(route => (
					<Route key={route.path} {...route} />
				))} */}
				{/* <RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
				<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} /> */}
			</Switch>
		</div>
	);
}
export default Router;
