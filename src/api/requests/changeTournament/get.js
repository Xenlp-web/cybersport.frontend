import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getTournamentsForAdmin = () => api.get(ENDPOINTS.GET_TOURNAMENTS_FOR_ADMIN);
const getTournamentOptionsForAdmin = ({tournament_id}) => api.get(ENDPOINTS.GET_TOURNAMENTS_OPTIONS_FOR_ADMIN, {}, {tournament_id});

export const {
  loadDataAction: forcedLoadTournamentsForAdminDataAction,
  responseSelector: getTournamentsForAdminResponseSelector
} = requestsFactory({ request: getTournamentsForAdmin, stateRequestKey: 'get_tournaments_for_admin' });

export const {
  doRequestAction: forcedLoadTournamentOptionsForAdminDataAction,
  responseSelector: getTournamentOptionsForAdminResponseSelector
} = requestsFactory({ request: getTournamentOptionsForAdmin, stateRequestKey: 'get_tournament_options_for_admin' });
