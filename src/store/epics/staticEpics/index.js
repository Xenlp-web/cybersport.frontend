import { combineEpics } from 'redux-observable';

import signIn from './signInEpics';
import errorSignIn from './errorSignInEpics';

const epics = [
  signIn,
  errorSignIn
];

export default combineEpics(...epics);