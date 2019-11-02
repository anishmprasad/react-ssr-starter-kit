import React from 'react';
import classNames from 'classnames';
import styles from './index.css';

function Content({ className, children }) {
	return <div className={classNames(styles.content, className)}>{children}</div>;
}

export default Content;
