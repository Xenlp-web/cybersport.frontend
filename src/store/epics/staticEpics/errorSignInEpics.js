import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  signInRejectedAction,
  signInErrorSelector
} from '@app/api/requests/sign-in';

const errorSignIn = (action$, state$) =>
  action$.pipe(
    ofType(signInRejectedAction),
    tap(() => {
      const message = signInErrorSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export default errorSignIn;