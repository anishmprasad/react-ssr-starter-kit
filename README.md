# react-ssr-starter-kit

A starter kit for react serverside rendering applications

# Features

-   Prerender Method { getInitialBeforeRender } on view components
-   ES6 Support
-   Redux Support
-   eslint Support
-   Server Side Rendering

# Packages Needed

-   Babel
-   React
-   Redux
-   Redux-thunk
-   Redux-Promise
-   PostCSS
-   Express
-   Hot Module Replacement

# Install dependencies

```
> $ npm install
```

# Runs the app in the development mode

Build and open your browser to http://localhost:8080.

```
> $ npm start
```

# Builds and runs the app in production

```
> $ npm run build
```

# Getting started

sample Home component for static declaration of data requirements

```jsx
function Home({ data, input }) {
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React ServerSideRendering • Home</title>
			</Helmet>
			<div className={styles.intro}>
				{data &&
					data.map(array => {
						return (
							<div key={`array-${array.id}`}>
								<h2>{array.title}</h2>
								<p>{array.body}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
Home.getInitialBeforeRender = () => InitialAction(); // static declaration of data requirements
function mapStateToProps(state) {
	const { sample } = state.sampleReducer;
	return {
		data: sample && sample.data
	};
}

export default connect(mapStateToProps, null)(Home);
```

# Issues

Please [file an issue](https://github.com/Anishmprasad/react-ssr-starter-kit/issues) if you find a bug, or need help.

# Todo

-   Code Splitting

# License

The MIT License (MIT)

Copyright (c) 2020 Anish M Prasad
