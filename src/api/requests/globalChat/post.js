import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const postMessageToGlobalChatRequest = (data) => {
  api.post(ENDPOINTS.SEND_MESSAGE_TO_GLOBAL_CHAT, data);
};

export const {
  responseSelector: sendMessageToGlobalChatSelector,
  doRequestAction: doSendMessageToGlobalChatRequestAction
} = requestsFactory({ request: postMessageToGlobalChatRequest, stateRequestKey: 'send_message_to_global_chat' });