import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getPlayerRequest = () => api.get(ENDPOINTS.PLAYER);

export const {
  loadDataAction: loadPlayerAction,
  forcedLoadDataAction: forcedLoadPlayerAction,
  requestFulfilledAction: loadPlayerFulfilledAction,
  setResponseAction: setLoadPlayerResponseAction,
  responseSelector: playerResponseSelector,
} = requestsFactory({ request: getPlayerRequest, stateRequestKey: 'player' });