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
import Alert from 'react-s-alert';
import {
  INIT,
  FETCH_SPOT_BY_ID,
  FETCH_SPOTS,
  LOGIN,
  REGISTER,
  FETCH_LOGIN_STATUS,
  FETCH_OWN_PROJECTS,
  SUBMIT_CREATE_PROJECT,
} from './constants';
import {
  setSpotLoading,
  setSpotDone,
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
  fetchOwnProjects,
} from './actions';

const setInit = (action$) => action$.ofType(INIT).switchMap(() => Observable.empty());

const fetchSpotByIdEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_SPOT_BY_ID),
    switchMap((action) => request({
      method: 'get',
      url: `/spot/${action.payload.id}`,
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
        flatMap((data) => {
          Alert.success('創建成功');
          return of(
            createProjectDone(null, data),
            fetchOwnProjects(), // reload own projects after creation
          );
        }),
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

const getKeywordQueryString = (keyword) => (
  typeof keyword === 'string' && keyword.length > 0
    ? `kw=${keyword}`
    : ''
);

const getZonesQueryString = (zones) => zones
  .map((zone) => `zone=${zone}`)
  .join('&');

const getSearchSpotQueryString = ({ zones, keyword }) => {
  const queryString = [
    getKeywordQueryString(keyword),
    getZonesQueryString(zones),
  ]
    .filter((queryStringSegment) => queryStringSegment !== '')
    .join('&');

  return queryString.length > 0 ? `?${queryString}` : '';
};

const fetchSpotsEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_SPOTS),
    switchMap((action) => request({
      method: 'get',
      url: `/spots${getSearchSpotQueryString({
        zones: action.payload.zones,
        keyword: action.payload.kw,
      })}`,
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
  fetchOwnProjectsEpic,
  fetchSpotByIdEpic,
  fetchSpotsEpic,
  loginEpic,
  registerEpic,
  fetchLoginStatusEpic,
  createProjectEpic,
];
