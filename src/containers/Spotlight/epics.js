import { Observable } from 'rxjs/Rx';
import {
  ofType,
} from 'redux-observable';
// import { of } from 'rxjs';
import {
  switchMap,
  flatMap,
  catchError,
} from 'rxjs/operators';
import {
  INIT,
  FETCH_A_SPOT_BY_ID,
} from './constants';

const setInit = (action$, store) =>
  action$.ofType(INIT).switchMap(() => {
    return Observable.empty();
  });

const fetchASpotByIdEpic = (action$, store, { fetchErrorEpic, request }) => (
  action$.pipe(
    ofType(FETCH_A_SPOT_BY_ID),
    switchMap((action) => {
      const {
        payload,
      } = action;
      return request({
        method: 'get',
        url: `/spot/1`,
      })
        .pipe(
          flatMap((data) => {
            console.log('data: ', data);
            debugger;
            return Observable.empty(); // send action here
          }),
          catchError((error) => fetchErrorEpic(error)),
        );
    })
  )
);

export default [
  setInit,
  fetchASpotByIdEpic,
];
