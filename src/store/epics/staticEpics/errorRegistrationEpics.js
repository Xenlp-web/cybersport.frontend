import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';

import {
  registrationRejectedAction,
  registrationErrorSelector
} from '@app/api/requests/registration';

const errorRegistration = (action$, state$) =>
  action$.pipe(
    ofType(registrationRejectedAction),
    tap(() => {
      const message = registrationErrorSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export default errorRegistration;