import styled from 'styled-components';
import {
  HeaderContainer as HeaderContainerComponent,
} from 'containers/Spotlight/Header/Styled';
import {
  HEIGHT_HEADER,
} from 'Styled/Settings/constants';

export const Container = styled.div`
  min-height: 100%;
  background-color: #FAFAFA;
  padding-top: ${HEIGHT_HEADER}px;
`;

export const Region = styled.div`
  font-size: 14px;
  padding: 9px 15px 15px;
  color: #AAAAAA;

  &:first-of-type {
    padding-top: 15px;
  }
`;

export const ZoneLabel = styled.label`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 11px;
  padding-bottom: 11px;
  border-bottom: solid 1px #DFDFDF;
  color: #333333;

  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
    padding-bottom: 15px;
  }
`;

export const HeaderContainer = styled(HeaderContainerComponent)`
  height: ${HEIGHT_HEADER}px;
  background-color: #F9D94A;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
`;
