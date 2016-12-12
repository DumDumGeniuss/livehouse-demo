import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Hello from '../components/Hello/Hello.jsx';

export default (
	<Route path="/">
		<IndexRoute component={Hello}>
		</IndexRoute>
	</Route>
);
