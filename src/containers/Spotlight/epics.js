import { Observable } from 'rxjs/Rx';
import {
  ofType,
} from 'redux-observable';
// import { of } from 'rxjs';
import {
  switchMap,
  flatMap,
  catchError,
  startWith,
} from 'rxjs/operators';
import {
  INIT,
  FETCH_SPOT_BY_ID,
} from './constants';
import {
  setSpotLoading,
  setSpotDone,
} from './actions';

const setInit = (action$, store) =>
  action$.ofType(INIT).switchMap(() => {
    return Observable.empty();
  });

const fetchASpotByIdEpic = (action$, store, { fetchErrorEpic, request }) => (
  action$.pipe(
    ofType(FETCH_SPOT_BY_ID),
    switchMap((action) => {
      const {
        payload,
      } = action;
      return request({
        method: 'get',
        url: `/spot/1`,
        // data: {}, // this is for post methods
      })
        .pipe(
          flatMap((data) => {
            console.log('data: ', data);
            debugger;
            return setSpotDone(null, data); // send action to reducer here, if sucess, then error is nulls
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

export default [
  setInit,
  fetchASpotByIdEpic,
];
