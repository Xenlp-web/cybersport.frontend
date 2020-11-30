import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postRegistrationTournamentRequest = (data) => api.post(ENDPOINTS.JOIN_REGISTRATION_TOURNAMENT, data);

export const {
  doRequestAction: doRegistrationTournamentRequestAction,
  responseSelector: registrationForTheTournamentResponseSelector,
  requestRejectedAction: requestRegistrationForTheTournamentRejectedAction,
  errorSelector: errorRegistrationForTheTournamentSelector,
  requestFulfilledAction: registrationTournamentFulfilledAction
} = requestsFactory({ request: postRegistrationTournamentRequest, stateRequestKey: 'registration_tournament' });
