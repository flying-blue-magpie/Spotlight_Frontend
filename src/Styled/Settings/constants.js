export const MAX_WIDTH = 1024;
export const HEIGHT_HEADER = 50;
export const HEIGHT_NAVIGATION = 60;

export const PAGE_NAME = {
  EXPLORE: { name: 'explore', text: '探索景點' },
  PLANNING: { name: 'planning', text: '計劃旅程' },
  ARTICLES: { name: 'articles', text: '遊記' },
  TRAVEL_WALL: { name: 'travelWall', text: '旅遊牆' },
  PERSONAL_PAGE: { name: 'personal', text: '我的' },
  SETTING: { name: 'setting', text: '設定' },
  DETAIL_PLANNING: { name: 'detailPlanning', text: '旅程內容' },
  UPDATE_PLANNING: { name: 'updatePlanning', text: '修改旅程' },
  CREATE_PROJECT: { name: 'createPlanning', text: '增加旅程' },
  ADD_SPOT_TO_PLAN: { name: 'addSpotToPlan', text: '從收藏添加景點' },
  SETTING_SPOT_CARD: { name: 'settingSpotCard', text: '景點設定' },
  UPDATING_SPOT_CARD: { name: 'updatingSpotCard', text: '景點設定' },
  ADD_SPOT_TO_PROJECT: { name: 'addSpotToProject', text: '加到我的行程' },
  EDIT_PLANNING_DAY: { name: 'editPlanningDay', text: '編輯天數' },
  TRAVELER: { name: 'traveler', text: '旅遊者' },
  CREATE_SPOT: { name: 'createSpot', text: '自建景點' },
};

export const mixinWidthWrapper = () => `
  width: 100%;
`;
