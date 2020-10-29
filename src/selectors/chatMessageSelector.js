import {createSelector} from "reselect";
import {getMessageToGlobalChatResponseSelector} from "@app/api/requests/globalChat";

export const allMessageGlobalChatSelector = createSelector(
  getMessageToGlobalChatResponseSelector,
  (response = {messages: {}}) => response.messages
);
