import {combineEpics, ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  requestCreateTournamentFulfilledAction,
  errorCreateTournamentSelector,
  responseCreateTournamentSelector,
  requestCreateTournamentRejectedAction
} from '@app/api/requests/tournaments';

const createTournamentSuccess = (action$, state$) =>
  action$.pipe(
    ofType(requestCreateTournamentFulfilledAction),
    tap(() => {
      const message = responseCreateTournamentSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

const createTournamentError = (action$, state$) =>
  action$.pipe(
    ofType(requestCreateTournamentRejectedAction),
    tap(() => {
      const message = errorCreateTournamentSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export const addTournament = combineEpics(createTournamentSuccess, createTournamentError);