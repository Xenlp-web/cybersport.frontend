import { combineEpics } from 'redux-observable';

import signIn from './signInEpics';

const epics = [
  signIn
];

export default combineEpics(...epics);