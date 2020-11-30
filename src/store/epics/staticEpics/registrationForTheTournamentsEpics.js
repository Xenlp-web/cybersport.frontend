import {combineEpics, ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  requestRegistrationForTheTournamentRejectedAction,
  registrationForTheTournamentResponseSelector,
  registrationTournamentFulfilledAction,
  errorRegistrationForTheTournamentSelector,
  cancelRegistrationTournamentFulfilledAction,
  cancelRegistrationForTheTournamentResponseSelector,
  requestCancelRegistrationForTheTournamentRejectedAction,
  errorCancelRegistrationForTheTournamentSelector
} from '@app/api/requests/registrationTournament';

const registrationTournamentSuccess = (action$, state$) =>
  action$.pipe(
    ofType(registrationTournamentFulfilledAction),
    tap(() => {
      const message = registrationForTheTournamentResponseSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
      window.location.reload();
    }),
    ignoreElements()
  );


const cancelRegistrationTournamentSuccess = (action$, state$) =>
  action$.pipe(
    ofType(cancelRegistrationTournamentFulfilledAction),
    tap(() => {
      const message = cancelRegistrationForTheTournamentResponseSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
      window.location.reload();
    }),
    ignoreElements()
  );

const registrationTournamentError = (action$, state$) =>
  action$.pipe(
    ofType(requestRegistrationForTheTournamentRejectedAction),
    tap(() => {
      const message = errorRegistrationForTheTournamentSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
      window.location.reload();
    }),
    ignoreElements()
  );

const cancelRegistrationTournamentError = (action$, state$) =>
  action$.pipe(
    ofType(requestCancelRegistrationForTheTournamentRejectedAction),
    tap(() => {
      const message = errorCancelRegistrationForTheTournamentSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
      window.location.reload();
    }),
    ignoreElements()
  );

export const registrationTournament = combineEpics(registrationTournamentSuccess, registrationTournamentError, cancelRegistrationTournamentSuccess, cancelRegistrationTournamentError);