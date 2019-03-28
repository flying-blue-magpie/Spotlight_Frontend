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

const setInit = (action$, store) =>
  action$.ofType(INIT).switchMap(() => {
    return Observable.empty();
  });

const fetchSpotByIdEpic = (action$, store, { fetchErrorEpic, request }) => (
  action$.pipe(
    ofType(FETCH_SPOT_BY_ID),
    switchMap((action) => {
      // const {
      //   payload,
      // } = action;
      return request({
        method: 'get',
        url: `/spot/1`,
        // data: {}, // this is for post methods
      })
        .pipe(
          flatMap((data) => {
            console.log('data: ', data);
            return of(setSpotDone(null, data)); // send action to reducer here, if sucess, then error is nulls
          }),
          catchError((error) => fetchErrorEpic(
            error,
            setSpotDone(error),
          )),
          startWith(setSpotLoading()),
        );
    })
  )
);

const fetchSpotsEpic = (action$, store, { fetchErrorEpic, request }) => (
  action$.pipe(
    ofType(FETCH_SPOTS),
    switchMap(() => {
      return request({
        method: 'get',
        url: `/spots`,
      })
        .pipe(
          flatMap((data) => of(setSpotsDone(null, data.content))),
          catchError((error) => fetchErrorEpic(
            error,
            setSpotsDone(error),
          )),
          startWith(setSpotsLoading()),
        );
    })
  )
);

export default [
  setInit,
  fetchSpotByIdEpic,
  fetchSpotsEpic,
];
