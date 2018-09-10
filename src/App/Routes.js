import React from 'react';
import universal from 'react-universal-component';
import { Route, Switch } from 'react-router';
import { Helmet } from 'react-helmet';
import Nav from '../Components/Nav';
import '../assets/css/globals.css';
import RedirectWithStatus from '../Components/RedirectStatus';
import Loading from '../Components/Loading';
// import UniversalComponent from '../shared/routeHelper';

const UniversalComponent = universal(props => import(`../Views/${props.page}`), {
	loading: () => <Loading />,
});

export default ({ lang }) => (
	<div>
		<Helmet>
			<link
				rel="shortcut icon"
				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
				type="image/x-icon"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<title>Isomorphic React Starter Kit</title>
		</Helmet>
		<Nav lang={lang} />
		<Switch>
			<Route
				exact
				path="/:lang"
				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
			/>
			<Route
				exact
				path="/:lang/about"
				render={routeProps => <UniversalComponent page="About" {...routeProps} />}
			/>
			<Route
				exact
				path="/:lang/article"
				render={routeProps => <UniversalComponent page="Article" {...routeProps} />}
			/>
			<Route
				exact
				path="/:lang/profile"
				render={routeProps => <UniversalComponent page="Profile" {...routeProps} />}
			/>
			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
		</Switch>
	</div>
);
