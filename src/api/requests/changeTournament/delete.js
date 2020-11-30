import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

export const deleteTournamentsForGames = (data) => api.post(ENDPOINTS.DELETE_TOURNAMENT_BY_ADMIN, data);

export const {
  doRequestAction: doDeleteTournamentsForGamesRequestAction,
  responseSelector: getDeleteTournamentsForGamesResponseSelector
} = requestsFactory({ request: deleteTournamentsForGames, stateRequestKey: 'delete_tournaments_for_games' });
