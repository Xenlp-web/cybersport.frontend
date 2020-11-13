import {createSelector} from "reselect";
import {getTournamentsForAdminResponseSelector, getTournamentOptionsForAdminResponseSelector} from "@app/api/requests/changeTournament";

export const getTournamentsForAdminSelector = createSelector(
  getTournamentsForAdminResponseSelector,
  (response = {tournaments: []}) => response.tournaments
);

export const getTournamentOptionsForAdminSelector = createSelector(
  getTournamentOptionsForAdminResponseSelector,
  (response = {tournamentInfo: []}) => response.tournamentInfo
);