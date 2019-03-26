import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 20px;

  .header-container__icon-wrapper {
    position: absolute;
    margin: 0px 6px;
  }
  .icon-style {
    color: white;
    margin: 0px 8px;
    cursor: pointer;
    font-size: 18px;
  }
  .icon-transition {
    transform: rotate(90deg);
  }
  .icon-right {
    right: 0;
  }
  .icon-left {
    left: 0;
  }
`;
