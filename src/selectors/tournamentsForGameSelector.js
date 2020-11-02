import {createSelector} from "reselect";
import {getTournamentsForGamesResponseSelector} from "@app/api/requests/tournaments";

export const getTournamentsForGameSelector = createSelector(
  getTournamentsForGamesResponseSelector,
  (response = {}) => response.tournaments
);
