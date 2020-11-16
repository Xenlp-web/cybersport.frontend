import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postChangeResultRequest = (data) => api.post(ENDPOINTS.CHANGE_RESULT, data);

export const {
  responseSelector: changeResultResponseSelector,
  doRequestAction: doChangeResultRequestAction,
  requestFulfilledAction: changeResultFulfilledAction
} = requestsFactory({ request: postChangeResultRequest, stateRequestKey: 'change-result'});