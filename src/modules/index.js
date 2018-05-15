import React from 'react';
import { Router, Route } from '../abstraction';
import { Page } from '../components/page';
import { Module1 } from './module1';
import { Module2 } from './module2';

export const App = () => (
	<Router>
		<Page>
			<Route exact path="/m" component={Module1} />
			<Route exact path="/" component={Module2} />
		</Page>
	</Router>
);
