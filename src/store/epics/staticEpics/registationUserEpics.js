import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import {requestRegistrationFulfilledAction, registrationResponseSelector} from '@app/api/requests/registration';
import pushNotification from "@app/components/Notification/Notification";

const registration = (action$, state$) =>
  action$.pipe(
    ofType(requestRegistrationFulfilledAction),
    tap(() => {
      const message = registrationResponseSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';

      pushNotification(title, message, type);
      localStorage.setItem('Authorization', registrationResponseSelector(state$.value).token);
      window.location.reload();
    }),
    ignoreElements()
  );

export default registration;