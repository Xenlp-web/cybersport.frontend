import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postCancelRegistrationTournamentRequest = (data) => api.post(ENDPOINTS.CANCEL_REGISTRATION_TOURNAMENT, data);

export const {
  doRequestAction: doCancelRegistrationTournamentRequestAction,
  responseSelector: cancelRegistrationForTheTournamentResponseSelector,
  requestRejectedAction: requestCancelRegistrationForTheTournamentRejectedAction,
  errorSelector: errorCancelRegistrationForTheTournamentSelector,
  requestFulfilledAction: cancelRegistrationTournamentFulfilledAction
} = requestsFactory({ request: postCancelRegistrationTournamentRequest, stateRequestKey: 'registration_tournament' });
