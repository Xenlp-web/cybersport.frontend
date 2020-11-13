import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postRegistrationTournamentRequest = (data) => api.post(ENDPOINTS.JOIN_REGISTRATION_TOURNAMENT, data);

export const {
  doRequestAction: doRegistrationTournamentRequestAction,
} = requestsFactory({ request: postRegistrationTournamentRequest, stateRequestKey: 'registration_tournament' });
