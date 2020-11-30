import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postCreateTournamentRequest = (data) => api.post(ENDPOINTS.CREATE_TOURNAMENT, data);

export const {
  doRequestAction: doCreateTournamentRequestAction,
  responseSelector: responseCreateTournamentSelector,
  requestFulfilledAction: requestCreateTournamentFulfilledAction,
  errorSelector: errorCreateTournamentSelector,
  requestRejectedAction: requestCreateTournamentRejectedAction
} = requestsFactory({ request: postCreateTournamentRequest, stateRequestKey: 'create_tournament' });
