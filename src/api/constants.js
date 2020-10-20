import config from '@config/app/default';

const { prefix } = config.common.api;

export const ENDPOINTS = {
  // from api
  PLAYER: `${prefix}/player`,
  SIGN_IN: `${prefix}/login`
};