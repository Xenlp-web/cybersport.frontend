import {createSelector} from "reselect";
import {getStatisticForPlayersResponseSelector} from "@app/api/requests/statisticForPlayers";

export const statisticsForPlayersSelector = createSelector(
  getStatisticForPlayersResponseSelector,
  (response = {}) => response
);
