import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';

import {
  setSignInErrorAction,
  signInErrorSelector
} from '@app/api/requests/sign-in';

const errorSignIn = (action$, state$) =>
  action$.pipe(
    ofType(setSignInErrorAction),
    tap(() => {
      alert(signInErrorSelector(state$.value).message)
    }),
    ignoreElements()
  );

export default errorSignIn;