import React from 'react';
import AppRouter from 'router/AppRouter';

export interface IHelloProps {
	compiler: string;
	framework: string;
}

export const App = (props: IHelloProps) => {
	return <AppRouter />;
};
