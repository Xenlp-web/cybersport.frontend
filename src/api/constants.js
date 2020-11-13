import config from '@config/app/default';

const { prefix } = config.common.api;

export const ENDPOINTS = {
  // from api
  AUTH_USER_INFO: `${prefix}/get-current-user-info`,
  SIGN_IN: `${prefix}/login`,
  REGISTRATION: `${prefix}/register`,
  SEND_MESSAGE_TO_GLOBAL_CHAT: `${prefix}/send-message-to-global-chat`,
  GET_MESSAGE_TO_GLOBAL_CHAT: `${prefix}/get-global-chat-messages`,
  CHANGE_USER_INFO: `${prefix}/change-user-info`,
  GET_ALL_REGIONS: `${prefix}/get-all-regions`,
  GET_GAMES_LIST: `${prefix}/get-all-games`,
  GET_STATISTIC_FOR_PLAYERS: `${prefix}/get-statistic-for-players`,
  GET_TOURNAMENTS_FOR_GAMES: `${prefix}/get-tournaments-by-game`,
  CREATE_TOURNAMENT: `${prefix}/create-tournament-by-admin`,
  JOIN_REGISTRATION_TOURNAMENT: `${prefix}/join-tournament`,
  CANCEL_REGISTRATION_TOURNAMENT: `${prefix}/cancel-tournament-participation`,
  GET_TOURNAMENTS_FOR_ADMIN: `${prefix}/get-tournaments-for-admin`,
  GET_TOURNAMENTS_OPTIONS_FOR_ADMIN: `${prefix}/get-tournaments-option-for-admin`
};
