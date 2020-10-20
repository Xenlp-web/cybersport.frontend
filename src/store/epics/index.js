import { combineEpics } from 'redux-observable';

import dynamicEpics from './dynamicEpics';
import staticEpics from './staticEpics';

export default combineEpics(dynamicEpics, staticEpics);