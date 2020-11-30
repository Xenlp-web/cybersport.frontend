import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getTournamentParticipants = ({tournament_id}) => api.get(ENDPOINTS.GET_TOURNAMENTS_USERS, {}, {tournament_id});

export const {
  forcedLoadDataAction: forcedLoadTournamentParticipantsDataAction,
  responseSelector: responseGetUsersForTournamentSelector,
  requestFulfilledAction: requestGetUsersForTournamentFulfilledAction,
  errorSelector: errorGetUsersForTournamentSelector,
  requestRejectedAction: requestGetUsersForTournamentRejectedAction
} = requestsFactory({ request: getTournamentParticipants, stateRequestKey: 'get_tournament_participants' });