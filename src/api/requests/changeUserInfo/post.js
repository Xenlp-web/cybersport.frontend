import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postSignInRequest = (data) => api.post(ENDPOINTS.CHANGE_USER_INFO, data);

export const {
  // responseSelector: signInResponseSelector,
  doRequestAction: doChangeUserInfoRequestAction,
  // requestFulfilledAction: changeUserInfoFulfilledAction
} = requestsFactory({ request: postSignInRequest, stateRequestKey: 'change-user-info'
  // fulfilledActions: [({ response }) => {
  //   // return the actions that should be dispatched when request is fulfilled
  //   console.log(response)
  //   return { type: 'SHOW_NOTIFICATION' }
  // }]
});

