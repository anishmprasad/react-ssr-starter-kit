import React from 'react';
import Content from '../../Components/Content';
const MarkdownData = require('../../../data/post.md');
const imagePath = require('../../assets/images/logo.svg');
import styles from './Profile.css';
import { Helmet } from 'react-helmet';

function Profile() {
    return (
        <div>
            <Helmet encodeSpecialCharacters={true}>
                <title>React ServerSideRendering • Profile</title>
            </Helmet>
            <Content>
                <div className={""}>
                    <img src={imagePath} />
                    <h1 className={""}>{"Anish"}</h1>
                    <div
                        className={styles.content}
                    >
                        Anish Description
                    </div>
                </div>
            </Content>
        </div>
    );
}

export default Profile;
