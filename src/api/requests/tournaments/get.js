import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getTournamentsForGames = ({game_id}) => api.get(ENDPOINTS.GET_TOURNAMENTS_FOR_GAMES, {}, {game_id});

export const {
  loadDataAction: forcedLoadTournamentsForGamesDataAction,
  responseSelector: getTournamentsForGamesResponseSelector
} = requestsFactory({ request: getTournamentsForGames, stateRequestKey: 'get_tournaments_for_games' });
