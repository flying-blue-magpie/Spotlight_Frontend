export const MAX_WIDTH = 1024;
export const HEIGHT_HEADER = 50;
export const HEIGHT_NAVIGATION = 60;

export const PAGE_NAME = {
  EXPLORE: { name: 'explore', text: '探索景點' },
  PLANNING: { name: 'planning', text: '計畫旅程' },
  TRAVEL_WALL: { name: 'travelWall', text: '旅遊牆' },
  PERSONAL_PAGE: { name: 'personal', text: '我的' },
  DETAIL_PLANNING: { name: 'detailPlanning', text: '旅程內容' },
  UPDATE_PLANNING: { name: 'updatePlanning', text: '修改旅程' },
  CREATE_PROJECT: { name: 'createPlanning', text: '增加旅程' },
  ADD_SPOT_TO_PLAN: { name: 'addSpotToPlan', text: '從收藏添加景點' },
  ADD_SPOT_TO_PROJECT: { name: 'addSpotToProject', text: '加到我的行程' },
};

export const mixinWidthWrapper = () => `
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;
