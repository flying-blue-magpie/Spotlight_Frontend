import { Observable } from 'rxjs/Rx';
import {
  ofType,
} from 'redux-observable';
import { of, from } from 'rxjs';
import {
  switchMap,
  flatMap,
  catchError,
  startWith,
  map,
  reduce,
  mergeAll,
} from 'rxjs/operators';
import message from 'antd/lib/message';

import toQueryString from 'utils/query-string';
import {
  INIT,
  FETCH_USER_BY_ID,
  FETCH_USERS,
  FETCH_USER_STATS,
  FETCH_SPOT_BY_ID,
  FETCH_SPOTS,
  FETCH_PROJECT_BY_ID,
  FETCH_PROJECTS,
  LOGIN,
  LOGOUT,
  REGISTER,
  FETCH_LOGIN_STATUS,
  FETCH_OWN_PROJECTS,
  SUBMIT_CREATE_PROJECT,
  SUBMIT_DELETE_PROJECT,
  LIKE_SPOT,
  FETCH_FAVORITE_SPOT_IDS,
  FETCH_FAVORITE_PROJECT_IDS,
  EXPLORE_NEXT_SPOT,
  KEY_REDUCER,
  SUBMIT_UPDATE_PROJECT,
  CANCEL_LIKE_SPOT,
  LIKE_PROJECT,
  CANCEL_LIKE_PROJECT,
  FETCH_REC_SPOTS,
  SEARCH_REC_SPOTS,
  REC_SPOTS_BUFFER_COUNT,
  SUBMIT_CREATE_SPOT,
} from './constants';
import {
  setUserLoading,
  setUserDone,
  setUsersLoading,
  setUsersDone,
  setUserStatsLoading,
  setUserStatsDone,
  setSpotLoading,
  setSpotDone,
  setSpotsLoading,
  setSpotsDone,
  setProjectLoading,
  setProjectDone,
  setProjectsLoading,
  setProjectsDone,
  setLoginLoading,
  setLoginDone,
  setLogoutLoading,
  setLogoutDone,
  setRegisterDone,
  setRegisterLoading,
  setLoginStatusDone,
  setLoginStatusLoading,
  setOwnProjectsDone,
  setOwnProjectsLoading,

  // create project
  createProjectDone,
  createProjectLoading,

  // update project
  updateProjectDone,
  updateProjectLoading,

  fetchOwnProjects,

  // delete project
  deleteProjectLoading,
  deleteProjectDone,

  setCancelLikeSpotDone,
  setLikeSpotDone,
  setFavoriteSpotIdsDone,
  setFavoriteSpotIdsLoading,
  setFavoriteProjectIdsDone,
  setFavoriteProjectIdsLoading,
  setExploringSpotId,
  deleteFavoriteSpotId,
  addFavoriteSpotId,
  setLikeProjectDone,
  addFavoriteProjectId,
  setCancelLikeProjectDone,
  deleteFavoriteProjectId,
  fetchUserById,
  setRecSpotsDone,
  setRecSpotsLoading,
  setSearchRecSpotsLoading,
  setSearchRecSpotsDone,
  deleteProjectById,
  createSpotDone,
  createSpotLoading,
} from './actions';

const setInit = (action$) => action$.ofType(INIT).switchMap(() => Observable.empty());

const fetchUserByIdEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_USER_BY_ID),
    flatMap((action) => request({
      method: 'get',
      url: `/user/${action.payload.id}`,
    }).pipe(
      flatMap((data) => of(
        setUserDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setUserDone(error),
      )),
      startWith(setUserLoading()),
    )),
  )
);

const fetchUsersEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_USERS),
    switchMap(() => request({
      method: 'get',
      url: '/users',
    }).pipe(
      flatMap((data) => of(
        setUsersDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setUsersDone(error),
      )),
      startWith(setUsersLoading()),
    )),
  )
);

const fetchUserStatsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_USER_STATS),
    switchMap((action) => request({
      method: 'get',
      url: `/stat/user/${action.payload.id}`,
    }).pipe(
      flatMap((data) => of(
        setUserStatsDone(null, data.content, action.payload.id),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setUserStatsDone(error),
      )),
      startWith(setUserStatsLoading()),
    )),
  )
);

const fetchSpotByIdEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_SPOT_BY_ID),
    flatMap((action) => request({
      method: 'get',
      url: `/spot/${action.payload.id}`,
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(setSpotDone(null, res.content));
        }
        return of(setSpotDone(res, { spot_id: action.payload.id }));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setSpotDone(error),
      )),
      startWith(setSpotLoading()),
    )),
  )
);

const fetchSpotsEpic = (action$, state$, { request, fetchErrorEpic }) => (
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

const fetchRecSpotsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_REC_SPOTS),
    flatMap((action) => request({
      method: 'get',
      url: `/rec/spots${getSearchSpotQueryString({
        zones: action.payload.zones,
        keyword: action.payload.kw,
        language: action.payload.language,
      })}`,
    }).pipe(
      flatMap((data) => of(
        setRecSpotsDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setRecSpotsDone(error),
      )),
      startWith(setRecSpotsLoading()),
    )),
  )
);

const searchRecSpotsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(SEARCH_REC_SPOTS),
    switchMap((action) => (
      from([...Array(REC_SPOTS_BUFFER_COUNT)].map(() => request({
        method: 'get',
        url: `/rec/spots${getSearchSpotQueryString({
          zones: action.payload.zones,
          keyword: action.payload.kw,
          language: action.payload.language,
        })}`,
      }))).pipe(
        mergeAll(),
        reduce((aggregateRes, data) => ([
          ...aggregateRes,
          ...data.content,
        ]), []),
        map((aggregateRes) => setSearchRecSpotsDone(null, aggregateRes)),
        startWith(setSearchRecSpotsLoading()),
        catchError((error) => fetchErrorEpic(
          error,
          setSearchRecSpotsDone(error),
        )),
      )
    )),
  )
);

const createSpotEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(SUBMIT_CREATE_SPOT),
    switchMap((action) => {
      const spot = {
        name: action.payload.name,
        zone: action.payload.zone,
        describe: action.payload.describe,
        tel: action.payload.tel,
        website: action.payload.website,
        address: action.payload.address,
        pic1: action.payload.pic1,
        pic2: action.payload.pic2,
        pic3: action.payload.pic3,
      };
      return request({
        method: 'post',
        url: '/own/spot',
        data: spot,
      }).pipe(
        flatMap((res) => {
          if (res.status === 'success') {
            message.success('景點建立成功');
            return of(createSpotDone(null, res.content));
          }
          message.success('景點建立失敗，請檢查資料格式');
          return of(createSpotDone(res));
        }),
        catchError((error) => fetchErrorEpic(
          error,
          createSpotDone(error),
        )),
        startWith(createSpotLoading()),
      );
    }),
  )
);

const fetchProjectByIdEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_PROJECT_BY_ID),
    flatMap((action) => request({
      method: 'get',
      url: `/proj/${action.payload.id}`,
    }).pipe(
      flatMap((data) => of(
        setProjectDone(null, data.content),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setProjectDone(error),
      )),
      startWith(setProjectLoading()),
    )),
  )
);

const fetchProjectsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_PROJECTS),
    switchMap((action) => request({
      method: 'get',
      url: `/projs?${toQueryString({
        owner: action.payload.owner,
        only_public: action.payload.onlyPublic,
      })}`,
    }).pipe(
      flatMap((data) => of(
        setProjectsDone(null, data.content),
        ...data.content
          .map((project) => project.owner)
          .filter((ownerId, index, ownerIds) => ownerIds.indexOf(ownerId) === index)
          .map((ownerId) => fetchUserById(ownerId)),
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setProjectsDone(error),
      )),
      startWith(setProjectsLoading()),
    )),
  )
);

const createProjectEpic = (action$, state$, { request, fetchErrorEpic }) => (
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

// PUT /own/proj/<int:proj_id>
const updateProjectEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(SUBMIT_UPDATE_PROJECT),
    switchMap((action) => {
      const {
        projectId,
        updateProject,
      } = action.payload;
      return request({
        method: 'put',
        url: `/own/proj/${projectId}`,
        data: updateProject.toJS(),
      }).pipe(
        flatMap((data) => {
          message.success('更新成功');
          return of(
            updateProjectDone(null, data),
            fetchOwnProjects(), // reload own projects after creation
          );
        }),
        catchError((error) => {
          message.error('更新失敗');
          return fetchErrorEpic(
            error,
            updateProjectDone(error),
          );
        }),
        startWith(updateProjectLoading()),
      );
    }),
  )
);

const deleteProjectEpic = (action$, state$, { request, fetchErrorEpic }) => (
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
        flatMap((res) => {
          if (res.status === 'success') {
            message.success('刪除成功');
            return of(
              deleteProjectDone(null),
              deleteProjectById(projectId),
            );
          }
          return of(
            deleteProjectDone(res),
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

const fetchOwnProjectsEpic = (action$, state$, { request, fetchErrorEpic }) => (
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

const getLanguageQueryString = (language) => (
  language === 'en'
    ? 'lang=en'
    : undefined
);

const getSearchSpotQueryString = ({ zones, keyword, language }) => {
  const queryString = [
    getKeywordQueryString(keyword),
    getZonesQueryString(zones),
    getLanguageQueryString(language),
  ]
    .filter((queryStringSegment) => queryStringSegment !== '')
    .join('&');

  return queryString.length > 0 ? `?${queryString}` : '';
};

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
          ? data.content
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

const logoutEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(LOGOUT),
    switchMap(() => request({
      method: 'post',
      url: '/logout',
    }).pipe(
      flatMap(() => (
        of(setLogoutDone(null))
      )),
      catchError((error) => fetchErrorEpic(
        error,
        setLogoutDone(error),
      )),
      startWith(setLogoutLoading()),
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
    switchMap((action) => request({
      method: 'post',
      url: `/like/spot/${action.payload}`,
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setLikeSpotDone(null, action.payload),
            addFavoriteSpotId(action.payload),
          );
        }
        return of(setLikeSpotDone(res));
      }),
    )),
  )
);

const cancelLikeSpotEpic = (action$, state$, { request }) => (
  action$.pipe(
    ofType(CANCEL_LIKE_SPOT),
    switchMap((action) => request({
      method: 'delete',
      url: `/like/spot/${action.payload}`,
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setCancelLikeSpotDone(null, action.payload),
            deleteFavoriteSpotId(action.payload),
          );
        }
        return of(setCancelLikeSpotDone(res));
      }),
    )),
  )
);

const likeProjectEpic = (action$, state$, { request }) => (
  action$.pipe(
    ofType(LIKE_PROJECT),
    switchMap((action) => request({
      method: 'post',
      url: `/like/proj/${action.payload}`,
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setLikeProjectDone(null, action.payload),
            addFavoriteProjectId(action.payload),
          );
        }
        return of(setLikeProjectDone(res));
      }),
    )),
  )
);

const cancelLikeProjectEpic = (action$, state$, { request }) => (
  action$.pipe(
    ofType(CANCEL_LIKE_PROJECT),
    switchMap((action) => request({
      method: 'delete',
      url: `/like/proj/${action.payload}`,
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setCancelLikeProjectDone(null, action.payload),
            deleteFavoriteProjectId(action.payload),
          );
        }
        return of(setCancelLikeProjectDone(res));
      }),
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

const fetchFavoriteProjectIdsEpic = (action$, state$, { request, fetchErrorEpic }) => (
  action$.pipe(
    ofType(FETCH_FAVORITE_PROJECT_IDS),
    switchMap(() => request({
      method: 'get',
      url: '/like/projs',
    }).pipe(
      flatMap((res) => {
        if (res.status === 'success') {
          return of(
            setFavoriteProjectIdsDone(null, res.content.map((row) => row.proj_id)),
          );
        }
        return of(setFavoriteProjectIdsDone(res));
      }),
      catchError((error) => fetchErrorEpic(
        error,
        setFavoriteProjectIdsDone(error),
      )),
      startWith(setFavoriteProjectIdsLoading()),
    )),
  )
);

const exploreNextSpotEpic = (action$, state$) => (
  action$.pipe(
    ofType(EXPLORE_NEXT_SPOT),
    map(() => {
      const state = state$.value.get(KEY_REDUCER);
      const favoriteSpotIds = state.get('favoriteSpotIds');
      const spotIds = state.get('recSpotsResult');
      const exploringSpotId = state.get('exploringSpotId');
      const notExploredSpotIds = spotIds
        .slice(spotIds.indexOf(exploringSpotId) + 1);
      const nextSpotId = notExploredSpotIds
        .find((notExploredId) => !favoriteSpotIds.includes(notExploredId));

      if (nextSpotId) {
        return setExploringSpotId(nextSpotId);
      }
      if (notExploredSpotIds.size === 0) {
        return setExploringSpotId(spotIds.get(0));
      }

      return setExploringSpotId(exploringSpotId);
    }),
  )
);

export default [
  setInit,
  fetchOwnProjectsEpic,
  fetchUserByIdEpic,
  fetchUsersEpic,
  fetchUserStatsEpic,
  fetchSpotByIdEpic,
  fetchSpotsEpic,
  fetchRecSpotsEpic,
  searchRecSpotsEpic,
  fetchProjectByIdEpic,
  fetchProjectsEpic,
  loginEpic,
  logoutEpic,
  registerEpic,
  fetchLoginStatusEpic,
  createProjectEpic,
  updateProjectEpic,
  deleteProjectEpic,
  likeSpotEpic,
  cancelLikeSpotEpic,
  likeProjectEpic,
  cancelLikeProjectEpic,
  fetchFavoriteSpotIdsEpic,
  fetchFavoriteProjectIdsEpic,
  exploreNextSpotEpic,
  createSpotEpic,
];
