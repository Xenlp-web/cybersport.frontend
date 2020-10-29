import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getGamesList = () => api.get(ENDPOINTS.GET_GAMES_LIST);

export const {
  loadDataAction: loadGamesListAction,
  responseSelector: gamesListResponseSelector,
} = requestsFactory({ request: getGamesList, stateRequestKey: 'game_list' });