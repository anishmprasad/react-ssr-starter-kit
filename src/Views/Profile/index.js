import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../../Components/Content';
import styles from './Profile.css';
// const MarkdownData = require('../../../data/post.md');
const imagePath = require('../../assets/images/logo.svg');


function Profile() {
	return (
		<div>
			<Helmet encodeSpecialCharacters>
				<title>React ServerSideRendering • Profile</title>
			</Helmet>
			<Content>
				<div className="image-path">
					<img src={imagePath} alt="imagepath" />
					<h1 className="anish">Anish</h1>
					<div
						className={styles.content}
					>
						{'Anish Description'}
					</div>
				</div>
			</Content>
		</div>
	);
}

export default Profile;
