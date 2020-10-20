import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postSignInRequest = (data) => api.post(ENDPOINTS.SIGN_IN, data);

export const {
  // loadDataAction, // do request once (can be dispatched many times, but do request once)
  // forcedLoadDataAction, // do request every time (used when need reload data)
  // doRequestAction, // do request every time (used for create, update and delete requests)
  // cancelRequestAction, // cancel request
  // requestFulfilledAction, // dispatched when request fulfilled
  // requestRejectedAction: signInRequestRejectedAction, // dispatched when request rejected
  // setErrorAction, // set custom Error for this request (requestRejectedAction will be dispatched)
  // setResponseAction, // set response for this request (requestFulfilledAction will be dispatched)
  // resetRequestAction, // reset request data
  // selectors
  responseSelector: signInResponseSelector, // returns `response || []`
  errorSelector: signInErrorSelector, // returns Error when request rejected or undefined
  requestStatusSelector: signInRequestStatusSelector, // returns request status ('none', 'loading', 'success', 'failed', 'canceled')
  isLoadingSelector: signInIsLoadingSelector, // returns true when request status === 'loading'
  // isLoadedSelector,
  doRequestAction: doSignInRequestAction,
  requestFulfilledAction: signInFulfilledAction
} = requestsFactory({ request: postSignInRequest, stateRequestKey: 'sign-in' });