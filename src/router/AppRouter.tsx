import Mentors from 'modules/Mentors/Mentors';
import WelcomePage from 'modules/WelcomePage/WelcomePage';
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';

export default function AppRouter() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<WelcomePage />
				</Route>
				<Route path="/mentors">
					<Mentors />
				</Route>
				<Route path="/dashboard">
					<Dashboard />
				</Route>
			</Switch>
		</Router>
	);
}

function Dashboard() {
	return (
		<div>
			<h2>Dashboard</h2>
		</div>
	);
}
