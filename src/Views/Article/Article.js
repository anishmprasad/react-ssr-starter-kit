import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../components/Content';
import styles from './Article.css';

function Article() {
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React SSR Boilerplate • Article</title>
			</Helmet>
			<Content>
				<div className={styles.article}>
					<h1 className={styles.title}>Article</h1>
					<div>anish</div>
				</div>
			</Content>
		</div>
	);
}

export default Article;
