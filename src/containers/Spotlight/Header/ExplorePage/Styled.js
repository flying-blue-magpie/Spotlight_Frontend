import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 100%;
  display: flex;
  font-size: 20px;
  align-items: center;
  padding: 0 14px;
`;

export const Title = styled.div`
  flex: 1;
  text-align: center;
`;

export const LeftButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

export const RightButtons = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const LinkButton = styled(Link)`
  &,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: #fff;
  }
`;
