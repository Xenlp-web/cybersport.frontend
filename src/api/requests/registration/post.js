import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postRegistrationRequest = (data) => api.post(ENDPOINTS.REGISTRATION, data);

export const {
  doRequestAction: doRegistrationRequestAction,
} = requestsFactory({ request: postRegistrationRequest, stateRequestKey: 'registration' });