import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { createRequestsFactoryMiddleware } from 'redux-requests-factory';
import { routerMiddleware } from 'connected-react-router';

import isProduction from '@app/utils/is-production';
import history from '@app/history';

import createRootReducer from './reducers';
import epics from './epics';

let enhancer;
const epicMiddleware = createEpicMiddleware();
const { middleware: requestsFactoryMiddleware } = createRequestsFactoryMiddleware();

const middleware = [routerMiddleware(history), epicMiddleware, requestsFactoryMiddleware];

if (isProduction) {
  enhancer = applyMiddleware(...middleware);
} else {
  // middleware.push(require('redux-logger').default); // Use if needed

  const { composeWithDevTools } = require('redux-devtools-extension');
  enhancer = composeWithDevTools(applyMiddleware(...middleware));
}

const store = createStore(createRootReducer(history), enhancer);

epicMiddleware.run(epics);

export default store;