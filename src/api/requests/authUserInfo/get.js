import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getAuthUserInfo = () => api.get(ENDPOINTS.AUTH_USER_INFO);

export const {
  forcedLoadDataAction: loadAuthUserInfoAction,
  responseSelector: authUserInfoResponseSelector,
} = requestsFactory({ request: getAuthUserInfo, stateRequestKey: 'auth_user_info' });