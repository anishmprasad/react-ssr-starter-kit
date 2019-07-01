import React from "react";
import { Switch, Route } from "react-router-dom";
// import Header from "../Header";
import Loadable from 'react-loadable';

import universal from 'react-universal-component';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';
import '../assets/css/globals.css';
import Loading from '../components/Loading';

import MainRoutes from "./MainRoutes";

export const SplitRoute = (props) => {
	console.log('props =>',props)
	const { component } = props
	const loadableComponent = Loadable({
		loader: component,
		loading: Loading
	});
	console.log('loadableComponent',loadableComponent)
	return <Route {...props} component={loadableComponent} />;
};

export const UniversalComponent = universal(props => import(`../views/${props.page}`), {
	loading: () => <Loading />,
});

// export default ({ lang }) => (
// 	<div>
// 		<Helmet>
// 			<link
// 				rel="shortcut icon"
// 				href="https://res.cloudinary.com/riangle/image/upload/v1531060402/favicon_zxkyaz.ico"
// 				type="image/x-icon"
// 			/>
// 			<meta name="viewport" content="width=device-width, initial-scale=1" />
// 			<title>Isomorphic React Starter Kit</title>
// 		</Helmet>
// 		<Nav lang={lang} />
// 		<Switch>
// 			<Route
// 				exact
// 				path="/:lang"
// 				render={routeProps => <UniversalComponent page="Home" {...routeProps} />}
// 			/>
// 			<Route
// 				exact
// 				path="/:lang/about"
// 				render={routeProps => <UniversalComponent page="About" {...routeProps} />}
// 			/>
// 			<Route
// 				exact
// 				path="/:lang/article"
// 				render={routeProps => <UniversalComponent page="Article" {...routeProps} />}
// 			/>
// 			<Route
// 				exact
// 				path="/:lang/profile"
// 				render={routeProps => <UniversalComponent page="Profile" {...routeProps} />}
// 			/>
// 			<RedirectWithStatus status={301} exact from="/" to={`/${lang}`} />
// 			<Route render={routeProps => <UniversalComponent page="NotFound" {...routeProps} />} />
// 		</Switch>
// 	</div>
// );
function Routes() {
	return(
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
			<Nav />
			<Switch>
				{MainRoutes.map(route => <Route key={route.path} {...route} />)}
			</Switch>
		</div>
	)
}
export default Routes;
