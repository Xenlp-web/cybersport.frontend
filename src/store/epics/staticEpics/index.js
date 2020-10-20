import { combineEpics } from 'redux-observable';

import languageEpics from './languageEpics';

const epics = [
  languageEpics
];

export default combineEpics(...epics);