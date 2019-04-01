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
  REGISTER,
  FETCH_LOGIN_STATUS,
  FETCH_OWN_PROJECTS,
  SUBMIT_CREATE_PROJECT,
} from './constants';
import {
  // setSpotLoading,
  // setSpotDone,
  setSpotsLoading,
  setSpotsDone,
  setLoginLoading,
  setLoginDone,
  setRegisterDone,
  setRegisterLoading,
  setLoginStatusDone,
  setLoginStatusLoading,
  setOwnProjectsDone,
  setOwnProjectsLoading,
  createProjectDone,
  createProjectLoading,
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

const createProjectEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(SUBMIT_CREATE_PROJECT),
    switchMap((action) => {
      const {
        newProject,
      } = action.payload;
      return request({
        method: 'post',
        url: '/own/proj',
        data: newProject,
      }).pipe(
        flatMap((data) => of(
          createProjectDone(null, data),
        )),
        catchError((error) => fetchErrorEpic(
          error,
          createProjectDone(error),
        )),
        startWith(createProjectLoading()),
      );
    }),
  )
);

const fetchOwnProjectsEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_OWN_PROJECTS),
    switchMap(() => request({
      method: 'get',
      url: '/own/projs',
    }).pipe(
      flatMap((data) => of(
        setOwnProjectsDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setOwnProjectsDone(error),
      )),
      startWith(setOwnProjectsLoading()),
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

const registerEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(REGISTER),
    switchMap((action) => request({
      method: 'post',
      url: '/register',
      data: action.payload,
    }).pipe(
      flatMap((data) => {
        const user = data.status === 'success'
          ? { name: action.payload.acc }
          : null;
        return of(setRegisterDone(null, user));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setRegisterDone(error),
      )),
      startWith(setRegisterLoading()),
    )),
  )
);

const fetchLoginStatusEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_LOGIN_STATUS),
    switchMap(() => request({
      method: 'get',
      url: '/check_login',
    }).pipe(
      flatMap((data) => {
        const user = data.status === 'success'
          ? data.content
          : null;
        return of(setLoginStatusDone(null, user));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setLoginStatusDone(error),
      )),
      startWith(setLoginStatusLoading()),
    )),
  )
);

export default [
  setInit,
  // fetchSpotByIdEpic,
  fetchOwnProjectsEpic,
  fetchSpotsEpic,
  loginEpic,
  registerEpic,
  fetchLoginStatusEpic,
  createProjectEpic,
];
