import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postRegistrationRequest = (data) => api.post(ENDPOINTS.REGISTRATION, data);

export const {
  responseSelector: registrationResponseSelector,
  errorSelector: registrationErrorSelector,
  doRequestAction: doRegistrationRequestAction,
  requestFulfilledAction: requestRegistrationFulfilledAction,
  requestRejectedAction: registrationRejectedAction
} = requestsFactory({ request: postRegistrationRequest, stateRequestKey: 'registration' });