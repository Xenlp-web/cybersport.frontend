import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { stateRequestsKey, requestsReducer } from 'redux-requests-factory';

import {addTokenReducer} from '@app/reducers/index';

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    [stateRequestsKey]: requestsReducer,
    addTokenReducer
  });

export default createRootReducer;