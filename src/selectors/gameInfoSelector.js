import {createSelector} from "reselect";
import { gameInfoResponseSelector } from "@app/api/requests/addGameInfo";

export const userDataGameInfoSelector = createSelector(
  gameInfoResponseSelector,
  (response = {
    game_info: {
      player_id: '',
      player_name: ''
    }
  }) => response.game_info
);
