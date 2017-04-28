import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import logger from './logger';
import rootReducer from './reducers';
import { loadCircles, loadSquares } from './actions';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

import App from './Components/App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	rootReducer,
	applyMiddleware(
		logger,
		sagaMiddleware
	)
);

sagaMiddleware.run(rootSaga);

store.dispatch(loadCircles());
store.dispatch(loadSquares());

const root = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	root
);