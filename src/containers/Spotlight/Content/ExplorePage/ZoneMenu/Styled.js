import styled from 'styled-components';

export const Region = styled.div`
  font-size: 14px;
  margin: 18px 12px 12px;
`;

export const ZoneLabel = styled.label`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 12px 9px;
  padding-bottom: 9px;
  border-bottom: solid 1px lightgray;

  &:last-child {
    border-bottom: 0;
  }
`;
