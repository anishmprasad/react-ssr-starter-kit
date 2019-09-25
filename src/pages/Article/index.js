import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../components/Content';
import styles from './index.css';
import { InitialAction } from '../../redux/actions/initialAction';

function Article() {
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React • Article</title>
			</Helmet>
			<Content>
				<div className={styles.article}>
					<h1 className={styles.title}>Article</h1>
					<div>{'data'}</div>
				</div>
			</Content>
		</div>
	);
}
Article.getInitialBeforeRender = () => InitialAction();

export default Article;
