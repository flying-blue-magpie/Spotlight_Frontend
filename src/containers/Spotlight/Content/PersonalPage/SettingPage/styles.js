import styled from 'styled-components';

export const StyledSettingPage = styled.div`
  height: 100%;
  background-color: #fff;
  font-size: 14px;
  .setting-page__settings {
    padding: 0 15px;
  }
  .setting-page__setting {
    border-bottom: solid 1px #EEEEEE;
  }
  .setting-page__general-setting {
    background-color: #333333;
    color: #fff;
    padding: 10px 15px;
  }
  .setting-page__language {
    background-color: white;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .setting-page__logout-button {
    background-color: white;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
  }
`;
