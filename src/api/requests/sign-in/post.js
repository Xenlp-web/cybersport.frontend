import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postSignInRequest = (data) => api.post(ENDPOINTS.SIGN_IN, data);

export const {
  responseSelector: signInResponseSelector,
  errorSelector: signInErrorSelector,
  doRequestAction: doSignInRequestAction,
  requestFulfilledAction: signInFulfilledAction,
  requestRejectedAction: setSignInErrorAction
} = requestsFactory({ request: postSignInRequest, stateRequestKey: 'sign-in'
  // fulfilledActions: [({ response }) => {
  //   // return the actions that should be dispatched when request is fulfilled
  //   console.log(response)
  //   return { type: 'SHOW_NOTIFICATION' }
  // }]
});

