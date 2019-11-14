import React from "react";
import * as styles from './app.css'
import WelcomePage from 'modules/WelcomePage/WelcomePage';

export interface HelloProps {
	compiler: string;
	framework: string;
};

export const App = (props: HelloProps) => {
	const [isFetching, setFetchingStatus] = React.useState(true);

	React.useEffect(() => {
		setTimeout(() => setFetchingStatus(false), 2000);
	}, []);

	return isFetching ? (
		<div className={styles.app}>
			<h1>Hello from {props.compiler} and {props.framework}!</h1>
		</div>
	) : (
		<WelcomePage />
	)
};
