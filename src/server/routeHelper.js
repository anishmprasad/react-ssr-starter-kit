function extractChildRoutes(route, prefix) {
	let paths = [];
	const childRoutes = route.props && route.props.children ? route.props.children : route.childRoutes;
	if (childRoutes) {
		if (Array.isArray(childRoutes)) {
			childRoutes.forEach(r => {
				paths.push({
					...r.props
				});
			});
		} else {
			paths = paths.concat(extractRoute(childRoutes, prefix));
		}
	}
	return paths;
}

function extractRoute(route, prefix) {
	const path = route.props && route.props.path ? route.props.path : route.path;
	let paths = [];

	if (!path) {
		if (Array.isArray(route)) {
			route.forEach(r => {
				paths = paths.concat(extractRoute(r, prefix));
			});

			return paths;
		} else {
			return extractChildRoutes(route, prefix);
		}
	}
	const currentPath = `${prefix || ''}${path}`.replace(/\/+/g, '/');

	if (!/:|\*/.test(currentPath)) {
		paths.push(`${currentPath.startsWith('/') ? '' : '/'}${currentPath}`);
		paths = paths.concat(extractChildRoutes(route, `${currentPath}/`));
	}
	return paths;
}

export default route => {
	let paths = [];
	console.log(route);
	if (Array.isArray(route)) {
		route.forEach(r => {
			paths.push({
				path: extractRoute(r),
				...r
			});
		});
	} else {
		// route.props.children.forEach(rout => {
		// 	paths.push({
		// 		...rout.props
		// 	});
		// });
		paths = paths.concat(extractRoute(route));
	}
	console.log(extractRoute(route));
	return paths;
};
