import {combineEpics, ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  requestChangeTournamentFulfilledAction,
  errorChangeTournamentSelector,
  responseChangeTournamentSelector,
  requestChangeTournamentRejectedAction
} from '@app/api/requests/changeTournament';

const changeTournamentSuccess = (action$, state$) =>
  action$.pipe(
    ofType(requestChangeTournamentFulfilledAction),
    tap(() => {
      const message = responseChangeTournamentSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

const changeTournamentError = (action$, state$) =>
  action$.pipe(
    ofType(requestChangeTournamentRejectedAction),
    tap(() => {
      const message = errorChangeTournamentSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export const changeTournament = combineEpics(changeTournamentSuccess, changeTournamentError);