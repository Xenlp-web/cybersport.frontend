import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getUserInfo = ({user_id}) => api.get(ENDPOINTS.GET_USER_INFO, {}, {user_id});

export const {
  forcedLoadDataAction: forcedLoadUserInfoDataAction,
  responseSelector: getUserInfoResponseSelector
} = requestsFactory({ request: getUserInfo, stateRequestKey: 'get_user_info_by_admin' });