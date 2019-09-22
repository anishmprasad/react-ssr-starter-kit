import Home from '../views/Home';
import About from '../views/About';
import Article from '../views/Article';
import Profile from '../views/Profile';

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
