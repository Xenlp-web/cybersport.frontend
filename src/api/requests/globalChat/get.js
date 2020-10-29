import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getMessageToGlobalChatRequest = () => api.get(ENDPOINTS.GET_MESSAGE_TO_GLOBAL_CHAT);

export const {
  loadDataAction: loadMessageToGlobalChatDataAction,
  responseSelector: getMessageToGlobalChatResponseSelector
} = requestsFactory({ request: getMessageToGlobalChatRequest, stateRequestKey: 'get_message_to_global_chat' });