export const MAX_WIDTH = 1024;
export const HEIGHT_HEADER = 50;
export const HEIGHT_NAVIGATION = 60;

export const PAGE_NAME = {
  EXPLORE: '探索景點',
  PLANNING: '計畫旅程',
  TRAVEL_WALL: '旅遊牆',
  PERSONAL_PAGE: '我的',
  EDIT_PLANNING: '編輯旅程',
  UPDATE_PLANNING: '修改旅程',
};

export const mixinWidthWrapper = () => `
  width: 100%;
  max-width: ${MAX_WIDTH}px;
`;
