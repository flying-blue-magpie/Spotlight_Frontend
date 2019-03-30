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
  // FETCH_SPOT_BY_ID,
  FETCH_SPOTS,
  LOGIN,
} from './constants';
import {
  // setSpotLoading,
  // setSpotDone,
  setSpotsLoading,
  setSpotsDone,
  setLoginLoading,
  setLoginDone,
} from './actions';

const setInit = (action$) => action$.ofType(INIT).switchMap(() => Observable.empty());

// const fetchSpotByIdEpic = (action$, $state, { request, fetchErrorEpic }) => (
//   action$.pipe(
//     ofType(FETCH_SPOT_BY_ID),
//     switchMap(() => request({
//       method: 'get',
//       url: '/spot/1',
//     }).pipe(
//       flatMap((data) => of(
//         setSpotDone(null, data.content),
//       )),
//       catchError((error) => fetchErrorEpic(
//         error,
//         setSpotDone(error),
//       )),
//       startWith(setSpotLoading()),
//     )),
//   )
// );

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

const loginEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(LOGIN),
    switchMap((action) => request({
      method: 'post',
      url: '/login',
      data: action.payload,
    }).pipe(
      flatMap((data) => {
        const user = data.status === 'success'
          ? { name: data.content.user }
          : null;
        return of(setLoginDone(null, user));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setLoginDone(error),
      )),
      startWith(setLoginLoading()),
    )),
  )
);

export default [
  setInit,
  // fetchSpotByIdEpic,
  fetchSpotsEpic,
  loginEpic,
];
