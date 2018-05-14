import { applyMiddleware, createStore } from 'redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { routerMiddleware } from 'react-router-redux';
import history from 'store/history';
import reducers from './reducers';

const middleware = [
  promise(),
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger());
}

export default createStore(reducers, applyMiddleware(...middleware));
