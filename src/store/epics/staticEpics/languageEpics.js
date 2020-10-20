import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';

import {signInFulfilledAction} from '@app/api/requests/sign-in';


const showSuccessNotification = (action$) =>
  action$.pipe(
    ofType(signInFulfilledAction),
    tap((data) => {
      console.log('success!!!! =>', data);
    }),
    // mergeMap((data) => [loadPlayerAction(data), loadPlayerAction(data) ])
    // map((data) => loadPlayerAction(data))
    // mapTo(loadPlayerAction())
    ignoreElements()
  );

export default showSuccessNotification;