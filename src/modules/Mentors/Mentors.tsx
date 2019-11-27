import React from 'react';
import * as styles from './Mentors.css';
import Table from 'ui/Table/Table';

interface IProps {

}

export default function Mentors(props: IProps) {
	return (
		<div className={styles.mentors}>
			Mentors

			<Table />
		</div>
	);
}
