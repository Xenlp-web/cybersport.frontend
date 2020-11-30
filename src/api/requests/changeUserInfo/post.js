import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postChangeUserInfo = (data) => api.post(ENDPOINTS.CHANGE_USER_INFO, data);

export const {
  doRequestAction: doChangeUserInfoRequestAction,
  responseSelector: changeUserInfoResponseSelector,
  errorSelector: changeUserInfoErrorSelector,
  requestFulfilledAction: changeUserInfoFulfilledAction,
  requestRejectedAction: changeUserInfoRejectedAction
} = requestsFactory({ request: postChangeUserInfo, stateRequestKey: 'change-user-info'});

