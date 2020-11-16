import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postChangeUserInfoByAdmin = (data) => api.post(ENDPOINTS.CHANGE_USER_INFO_BY_ADMIN, data);

export const {
  doRequestAction: doChangeUserInfoByAdminRequestAction
} = requestsFactory({ request: postChangeUserInfoByAdmin, stateRequestKey: 'change-user-info-by-admin'});