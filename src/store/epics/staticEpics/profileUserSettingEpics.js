import {ofType} from 'redux-observable';
import {ignoreElements, tap} from 'rxjs/operators';
import pushNotification from '@app/components/Notification/Notification.jsx';
import { combineEpics } from 'redux-observable';

import {
  changeUserInfoFulfilledAction,
  changeUserInfoResponseSelector,
  changeUserInfoRejectedAction,
  changeUserInfoErrorSelector
} from '@app/api/requests/changeUserInfo';

const handleProfileSettingSuccess = (action$, state$) =>
  action$.pipe(
    ofType(changeUserInfoFulfilledAction),
    tap(() => {
      const message = changeUserInfoResponseSelector(state$.value).message;
      const type = 'success';
      const title = 'Оповещение';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

const handleProfileSettingError = (action$, state$) =>
  action$.pipe(
    ofType(changeUserInfoRejectedAction),
    tap(() => {
      const message = changeUserInfoErrorSelector(state$.value).message;
      const type = 'danger';
      const title = 'Ошибка';
      pushNotification(title, message, type);
    }),
    ignoreElements()
  );

export const profileUserSetting = combineEpics(handleProfileSettingSuccess, handleProfileSettingError);