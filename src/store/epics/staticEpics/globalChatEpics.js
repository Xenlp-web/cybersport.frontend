import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';

import {sendMessageToGlobalChatSelector, loadMessageToGlobalChatDataAction, getMessageToGlobalChatResponseSelector} from '@app/api/requests/globalChat';

export const sendMessageToGlobalChat = (action$) =>
  action$.pipe(
    ofType(sendMessageToGlobalChatSelector),
    tap((data) => {
      console.log('success!!!! =>', data);
    }),
    // mergeMap((data) => [loadPlayerAction(data), loadPlayerAction(data) ])
    // map((data) => loadPlayerAction(data))
    // mapTo(loadPlayerAction())
    ignoreElements()
  );

// export const getMessageToGlobalChat = (action$, state$) =>
//   action$.pipe(
//     ofType(loadMessageToGlobalChatDataAction),
//     tap(() => {
//       console.log(getMessageToGlobalChatResponseSelector(state$));
//     }),
//     ignoreElements()
//   );