import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../components/Content';
// const MarkdownData = require('../../../data/post.md');
import styles from './About.css';

const imagePath = require('../../assets/images/logo.svg');

function About() {
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React SSR Boilerplate • About</title>
			</Helmet>
			<Content>
				<div className={styles.profile}>
					<img src={imagePath} alt='imagePath' />
					<h1 className={styles.title}>About</h1>
					<div
						className={styles.content}
						// dangerouslySetInnerHTML={{ __html: MarkdownData.__content }}
					/>
				</div>
			</Content>
		</div>
	);
}

export default About;
