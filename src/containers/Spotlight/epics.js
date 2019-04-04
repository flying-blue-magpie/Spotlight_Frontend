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
  distinct,
  map,
} from 'rxjs/operators';
import message from 'antd/lib/message';
import {
  INIT,
  FETCH_SPOT_BY_ID,
  FETCH_SPOTS,
  LOGIN,
  REGISTER,
  FETCH_LOGIN_STATUS,
  FETCH_OWN_PROJECTS,
  SUBMIT_CREATE_PROJECT,
  SUBMIT_DELETE_PROJECT,
  LIKE_SPOT,
  FETCH_FAVORITE_SPOT_IDS,
  EXPLORE_NEXT_SPOT,
  KEY_REDUCER,
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
  deleteProjectLoading,
  deleteProjectDone,
  setLikeSpotDone,
  setFavoriteSpotIdsDone,
  setFavoriteSpotIdsLoading,
  setExploringSpotId,
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
          message.success('創建成功');
          return of(
            createProjectDone(null, data),
            fetchOwnProjects(), // reload own projects after creation
          );
        }),
        catchError((error) => {
          message.error('創建失敗');
          return fetchErrorEpic(
            error,
            createProjectDone(error),
          );
        }),
        startWith(createProjectLoading()),
      );
    }),
  )
);

const deleteProjectEpic = (action$, $state, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(SUBMIT_DELETE_PROJECT),
    switchMap((action) => {
      const {
        projectId,
      } = action.payload;
      return request({
        method: 'delete',
        url: `/proj/${projectId}`,
      }).pipe(
        flatMap(() => {
          message.success('刪除成功');
          return of(
            deleteProjectDone(null),
            fetchOwnProjects(), // reload own projects after creation
          );
        }),
        catchError((error) => {
          message.error('刪除失敗');
          return fetchErrorEpic(
            error,
            deleteProjectDone(error),
          );
        }),
        startWith(deleteProjectLoading()),
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

const likeSpotEpic = (action$, state$, { request }) => (
  action$.pipe(
    ofType(LIKE_SPOT),
    map((action) => action.payload),
    distinct(),
    flatMap((spotId) => request({
      method: 'post',
      url: `/like/spot/${spotId}`,
    }).pipe(
      flatMap((res) => of(
        res.status === 'success'
          ? setLikeSpotDone(null, spotId)
          : setLikeSpotDone(res),
      )),
    )),
  )
);

const fetchFavoriteSpotIdsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_FAVORITE_SPOT_IDS),
    switchMap(() => request({
      method: 'get',
      url: '/like/spots',
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setFavoriteSpotIdsDone(null, res.content.map((row) => row.spot_id)),
          );
        }
        return of(setFavoriteSpotIdsDone(res));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setFavoriteSpotIdsDone(error),
      )),
      startWith(setFavoriteSpotIdsLoading()),
    )),
  )
);

const exploreNextSpotEpic = (action$, state$) => (
  action$.pipe(
    ofType(EXPLORE_NEXT_SPOT),
    map(() => {
      const state = state$.value.get(KEY_REDUCER);
      const favoriteSpotIds = state.get('favoriteSpotIds');
      const spotIds = state.get('spotsResult');
      const exploringSpotId = state.get('exploringSpotId');
      const nextSpot = spotIds
        .slice(spotIds.indexOf(exploringSpotId) + 1)
        .map((id) => state.getIn(['spots', String(id)]))
        .find((spot) => !favoriteSpotIds.includes(spot.get('spot_id')));

      if (nextSpot) {
        return setExploringSpotId(nextSpot.get('spot_id'));
      }

      return setExploringSpotId(exploringSpotId);
    }),
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
  deleteProjectEpic,
  likeSpotEpic,
  fetchFavoriteSpotIdsEpic,
  exploreNextSpotEpic,
];
