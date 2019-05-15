import styled from 'styled-components';
import {
  GRAY_DARK,
  BACKGROUND_COLOR,
} from 'Styled/Settings/colors';

export const StyledSettingPage = styled.div`
  height: 100%;
  background-color: ${BACKGROUND_COLOR};
  .setting-page__general-setting {
    background-color: ${GRAY_DARK};
    padding: 0 15px;
    line-height: 48px;
    font-size: 18px;
  }
  .setting-page__language {
    background-color: white;
    padding: 10px 15px;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setting-page__logout-button {
    background-color: white;
    padding: 0 15px;
    line-height: 48px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
`;
