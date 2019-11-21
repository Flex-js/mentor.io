import React from 'react';
import AppRouter from 'router/AppRouter';
import 'semantic-ui-css/semantic.min.css';

export interface IHelloProps {
	compiler: string;
	framework: string;
}

export const App = (props: IHelloProps) => {
	return <AppRouter />;
};
