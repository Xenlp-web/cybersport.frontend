// import {ofType} from 'redux-observable';
// import {ignoreElements, tap} from 'rxjs/operators';
//
// import { loadAuthUserInfoAction, authUserInfoResponseSelector} from '@app/api/requests/authUserInfo';
//
// const authUserInfo = (action$, state$) =>
//   action$.pipe(
//     ofType(loadAuthUserInfoAction),
//     tap(() => {
//       console.log(authUserInfoResponseSelector(state$.value).token);
//     }),
//     ignoreElements()
//   );
//
// export default authUserInfo;