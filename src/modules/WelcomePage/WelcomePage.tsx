import React from 'react';
import Loader from 'ui/Loader/Loader';
import styles from './WelcomePage.css'

export default function WelcomePage() {
	return (
		<div className={styles.welcomePage}>
			<Loader />
			<div>
				Your education begins...
			</div>
		</div>
	)
}