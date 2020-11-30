import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getGameInfo = ({ game_id, user_id }) => api.get(ENDPOINTS.GET_GAME_INFO, {}, { game_id, user_id });

export const {
  loadDataAction: loadGameInfoAction,
  responseSelector: gameInfoResponseSelector,
} = requestsFactory({ request: getGameInfo, stateRequestKey: 'get_game_info' });