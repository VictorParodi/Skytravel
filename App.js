import React from 'react';
import Router from './src/routes/Router';
import { Provider } from 'react-redux';
import Store from './src/redux/store';

const store = Store();

export default function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}
