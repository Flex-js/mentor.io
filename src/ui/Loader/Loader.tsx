import React from 'react';
import * as styles from './Loader.css';

export default function Loader() {
	return (
		<div className={`${styles.book} ${styles.loader}`}>
			<figure className={styles.page} /> 
			<figure className={styles.page} /> 
			<figure className={styles.page} /> 
		</div>
	)
}