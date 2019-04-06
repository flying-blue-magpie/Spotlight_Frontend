import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    color: rgba(51, 51, 51, 1);
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

export const HeaderTitle = styled.div`
  flex-basis: 1;
  flex-shrink: 0;
  text-align: center;
`;

export const HeaderLeftButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  padding-left: 14px;
`;

export const HeaderRightButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 14px;
`;

export const HeaderLinkButton = styled(Link)`
  &,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: #fff;
  }
`;

export const HeaderButton = styled.button`
  padding: 0;
  border: 0;
  &,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: #fff;
    background-color: transparent;
  }
`;
