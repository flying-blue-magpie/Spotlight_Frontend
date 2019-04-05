export const MAX_WIDTH = 1024;
export const HEIGHT_HEADER = 50;
export const HEIGHT_NAVIGATION = 60;

export const PAGE_NAME = {
  EXPLORE: '探索景點',
  PLANNING: '計畫旅程',
  TRAVEL_WALL: '旅遊牆',
  PERSONAL_PAGE: '我的',
  DETAIL_PLANNING: '旅程內容',
  UPDATE_PLANNING: '修改旅程',
  CREATE_PROJECT: '增加旅程',
  ADD_SPOT_TO_PROJECT: '加到我的行程',
};

export const mixinWidthWrapper = () => `
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;
