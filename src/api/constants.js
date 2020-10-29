import config from '@config/app/default';

const { prefix } = config.common.api;

export const ENDPOINTS = {
  // from api
  AUTH_USER_INFO: `${prefix}/getCurrentUserInfo`,
  SIGN_IN: `${prefix}/login`,
  REGISTRATION: `${prefix}/register`,
  SEND_MESSAGE_TO_GLOBAL_CHAT: `${prefix}/sendMessageToGlobalChat`,
  GET_MESSAGE_TO_GLOBAL_CHAT: `${prefix}/getGlobalChatMessages`,
  CHANGE_USER_INFO: `${prefix}/changeUserInfo`,
  GET_ALL_REGIONS: `${prefix}/getAllRegions`,
  GET_GAMES_LIST: `${prefix}/getAllGames`
};