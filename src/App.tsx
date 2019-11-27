import React from 'react';
import AppRouter from 'router/AppRouter';

import 'app.css';

export interface IHelloProps {
	compiler: string;
	framework: string;
}

export const App = (props: IHelloProps) => {
	return <AppRouter />;
};
