import { requestsFactory } from 'redux-requests-factory';

import api from '@app/api';
import { ENDPOINTS } from '@app/api/constants';

const getStatisticForPlayers = ({ game_id, stat_item, period }) => api.get(ENDPOINTS.GET_STATISTIC_FOR_PLAYERS, {}, { game_id, stat_item, period });

export const {
  forcedLoadDataAction: forcedLoadStatisticForPlayersDataAction,
  responseSelector: getStatisticForPlayersResponseSelector
} = requestsFactory({
  request: getStatisticForPlayers,
  stateRequestKey: 'get_statistic_for_players'
});
