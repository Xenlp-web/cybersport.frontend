import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { stateRequestsKey, requestsReducer } from 'redux-requests-factory';

import app from '@app/reducers/reducer';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [stateRequestsKey]: requestsReducer,
    app
  });

export default createRootReducer;