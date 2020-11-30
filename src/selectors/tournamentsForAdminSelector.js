import {createSelector} from "reselect";
import {
  getTournamentsForAdminResponseSelector,
  getTournamentOptionsForAdminResponseSelector,
  getTournamentInfoResponseSelector
} from "@app/api/requests/changeTournament";

export const getTournamentsForAdminSelector = createSelector(
  getTournamentsForAdminResponseSelector,
  (response = {tournaments: []}) => response.tournaments
);

export const getTournamentOptionsForAdminSelector = createSelector(
  getTournamentOptionsForAdminResponseSelector,
  (response = {tournamentInfo: []}) => response.tournamentInfo
);

export const getTournamentOptionsForPageSelector = createSelector(
  getTournamentInfoResponseSelector,
  (response = {tournament: {
    0: {
      current_players: 'error',
      kill_award: 'error',
      max_players: 'error',
      mode: 'error',
      pov: 'error',
      start_time: 'error',
      tickets: 'error',
      title: 'error'
    }
    }}) => response.tournament
);