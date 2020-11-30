import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getTournamentsForAdmin = () => api.get(ENDPOINTS.GET_TOURNAMENTS_FOR_ADMIN);
const getTournamentOptionsForAdmin = ({tournament_id}) => api.get(ENDPOINTS.GET_TOURNAMENTS_OPTIONS_FOR_ADMIN, {}, {tournament_id});
const getTournamentInfo = ({tournament_id, game_id}) => api.get(ENDPOINTS.GET_TOURNAMENT_INFO, {}, {tournament_id, game_id});

export const {
  forcedLoadDataAction: forcedLoadTournamentsForAdminDataAction,
  responseSelector: getTournamentsForAdminResponseSelector
} = requestsFactory({ request: getTournamentsForAdmin, stateRequestKey: 'get_tournaments_for_admin' });

export const {
  forcedLoadDataAction: forcedLoadTournamentOptionsForAdminDataAction,
  responseSelector: getTournamentOptionsForAdminResponseSelector
} = requestsFactory({ request: getTournamentOptionsForAdmin, stateRequestKey: 'get_tournament_options_for_admin' });

export const {
  loadDataAction: loadTournamentInfoDataAction,
  responseSelector: getTournamentInfoResponseSelector
} = requestsFactory({ request: getTournamentInfo, stateRequestKey: 'get_tournament_info' });
