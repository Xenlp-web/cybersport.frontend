import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postChangeTournamentRequest = (data) => api.post(ENDPOINTS.CHANGE_TOURNAMENT_BY_ADMIN, data);

export const {
  doRequestAction: doChangeTournamentRequestAction,
  responseSelector: responseChangeTournamentSelector,
  requestFulfilledAction: requestChangeTournamentFulfilledAction,
  errorSelector: errorChangeTournamentSelector,
  requestRejectedAction: requestChangeTournamentRejectedAction
} = requestsFactory({ request: postChangeTournamentRequest, stateRequestKey: 'change_tournament' });
