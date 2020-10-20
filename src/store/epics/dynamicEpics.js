import { ReplaySubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const epic$ = new ReplaySubject();

const dynamicEpics = (...args) =>
  epic$.pipe(mergeMap((epic) => epic(...args)));

export const registerNewEpic = (newEpic) => {
  epic$.next(newEpic);
};

export default dynamicEpics;