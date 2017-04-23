import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from './logger';
import rootReducer from './reducers';

import App from './Components/App';

const store = createStore(
	rootReducer,
	applyMiddleware(
		logger
	)
);

const root = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);