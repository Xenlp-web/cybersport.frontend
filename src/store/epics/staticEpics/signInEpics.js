import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';

import {signInResponseSelector, signInFulfilledAction} from '@app/api/requests/sign-in';

const signIn = (action$, state$) =>
  action$.pipe(
    ofType(signInFulfilledAction),
    tap(() => {
      localStorage.setItem('Authorization', signInResponseSelector(state$.value).token);
      window.location.reload();
    }),
    ignoreElements()
  );

export default signIn;