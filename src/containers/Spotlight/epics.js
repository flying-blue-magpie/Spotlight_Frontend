import { Observable } from 'rxjs/Rx';
import {
  ofType,
} from 'redux-observable';
import { of } from 'rxjs';
import {
  switchMap,
  flatMap,
  catchError,
  startWith,
} from 'rxjs/operators';
import {
  INIT,
  FETCH_SPOT_BY_ID,
  FETCH_SPOTS,
} from './constants';
import {
  setSpotLoading,
  setSpotDone,
  setSpotsLoading,
  setSpotsDone,
} from './actions';

const setInit = (action$) => action$.ofType(INIT).switchMap(() => Observable.empty());

const fetchSpotByIdEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_SPOT_BY_ID),
    switchMap(() => request({
      method: 'get',
      url: '/spot/1',
    }).pipe(
      flatMap((data) => of(
        setSpotDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setSpotDone(error),
      )),
      startWith(setSpotLoading()),
    )),
  )
);

const fetchSpotsEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_SPOTS),
    switchMap(() => request({
      method: 'get',
      url: '/spots',
    }).pipe(
      flatMap((data) => of(
        setSpotsDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setSpotsDone(error),
      )),
      startWith(setSpotsLoading()),
    )),
  )
);

export default [
  setInit,
  fetchSpotByIdEpic,
  fetchSpotsEpic,
];
