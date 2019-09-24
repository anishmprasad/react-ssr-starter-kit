// import React from 'react';
// import { Route, Switch, Router } from 'react-router';
// import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Article from '../pages/Article';
import Profile from '../pages/Profile';

// console.log({ About });
// console.log({ Home });

// import reactRouterToArray from './RouteHelper';

export default [
	{
		path: '/',
		component: Home,
		exact: true
	},
	{
		path: '/home',
		component: Home,
		exact: true
	},
	{
		path: '/about',
		component: About,
		exact: true
	},
	{
		path: '/article',
		component: Article,
		exact: true
	},
	{
		path: '/profile',
		component: Profile,
		exact: true
	}
];

// const outerToArray = reactRouterToArray(
// 	<Switch>
// 		<Route path='/' component={Home} />
// 		<Route path='about' component={About} />
// 		<Route path='users' component={Article} />
// 		<Route path='profile' component={Profile} />
// 	</Switch>
// );

// const Routes = () => {
// 	console.log('Routes');
// 	return (
// 		<Switch>
// 			<Route path='/' component={Home} exact />
// 			<Route path='/about' component={About} exact />
// 			<Route path='/users' component={Article} exact />
// 			<Route path='/profile' component={Profile} exact />
// 		</Switch>
// 	);
// };

// export default Routes;
