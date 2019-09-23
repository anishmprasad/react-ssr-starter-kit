import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../components/Content';
// const MarkdownData = require('../../../data/post.md');
import styles from './index.css';
import { InitialAction } from '../../redux/actions/initialAction';

const imagePath = require('../../assets/images/logo.svg');

/* eslint-disable */
function About() {
	debugger;
	console.log('About');
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React • About</title>
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
About.getInitialBeforeRender = () => InitialAction();
export default About;
