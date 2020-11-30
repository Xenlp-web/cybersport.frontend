import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';

import {
  signInResponseSelector,
  signInFulfilledAction
} from '@app/api/requests/sign-in';
import pushNotification from "@app/components/Notification/Notification";

const signIn = (action$, state$) =>
  action$.pipe(
    ofType(signInFulfilledAction),
    tap(() => {
      const message = signInResponseSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';

      pushNotification(title, message, type);
      localStorage.setItem('Authorization', signInResponseSelector(state$.value).token);
      window.location.reload();
    }),
    ignoreElements()
  );

export default signIn;