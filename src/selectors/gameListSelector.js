import {createSelector} from "reselect";
import {gamesListResponseSelector} from "@app/api/requests/games";

export const gameListSelector = createSelector(
  gamesListResponseSelector,
  (response = {games: {}}) => response.games
);
