import {combineEpics, ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  requestGetUsersForTournamentFulfilledAction,
  errorGetUsersForTournamentSelector,
  responseGetUsersForTournamentSelector,
  requestGetUsersForTournamentRejectedAction,
  forcedLoadTournamentParticipantsDataAction
} from '@app/api/requests/tournamentParticipants';

const getUsersForTournamentSuccess = (action$, state$) =>
  action$.pipe(
    ofType(requestGetUsersForTournamentFulfilledAction),
    tap(() => {
      const message = responseGetUsersForTournamentSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

const getUsersForTournamentError = (action$, state$) =>
  action$.pipe(
    ofType(requestGetUsersForTournamentRejectedAction),
    tap(() => {
      const message = errorGetUsersForTournamentSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export const getUsersForTournament = combineEpics(getUsersForTournamentSuccess, getUsersForTournamentError);