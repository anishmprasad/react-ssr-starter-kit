import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../components/Content';

import styles from './NotFound.css';
import AppearAfter from '../../components/AppearAfter';
import Status from '../../components/Status';

function NotFound() {
	return (
		<Fragment>
			<Helmet encodeSpecialCharacters>
				<title>React SSR Boilerplate • Not Found</title>
			</Helmet>
			<Status code={404} />
			<AppearAfter className={styles.content} delay={500}>
				<Content>
					<div className={styles.notFound}>
						<h1 className={styles.title}>Not Found</h1>
						<div>404 Error - Page not found.</div>
					</div>
				</Content>
			</AppearAfter>
		</Fragment>
	);
}

export default NotFound;
