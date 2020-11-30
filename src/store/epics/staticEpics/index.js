import { combineEpics } from 'redux-observable';

import signIn from './signInEpics';
import errorSignIn from './errorSignInEpics';
import registration from './registationUserEpics';
import errorRegistration from './errorRegistrationEpics';
import { profileUserSetting } from './profileUserSettingEpics';
import { changeTournament } from './changeTournamentInfoEpics';
import { addTournament } from './addTournamentsEpics';
import { getUsersForTournament } from './getUsersForTournamentEpics';
import { registrationTournament } from './registrationForTheTournamentsEpics'
const epics = [
  signIn,
  errorSignIn,
  registration,
  errorRegistration,
  profileUserSetting,
  changeTournament,
  addTournament,
  getUsersForTournament,
  registrationTournament
];

export default combineEpics(...epics);