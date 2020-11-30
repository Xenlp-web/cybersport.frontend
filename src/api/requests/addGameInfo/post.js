import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postChangeGameInfo = (data) => api.post(ENDPOINTS.ADD_GAME_INFO, data);

export const {
  doRequestAction: doChangeGameInfoRequestAction,
  responseSelector: changeGameInfoResponseSelector,
  errorSelector: changeGameInfoErrorSelector,
  requestFulfilledAction: changeGameInfoFulfilledAction,
  requestRejectedAction: changeGameInfoRejectedAction
} = requestsFactory({ request: postChangeGameInfo, stateRequestKey: 'change-game-info'});

