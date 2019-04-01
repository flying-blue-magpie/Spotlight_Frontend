import styled from 'styled-components';

export const Container = styled.div`
`;

export const Card = styled.div`
  display: block;
`;

export const CardImage = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: lightgray;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  background: lightgray;
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchRow = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgray;
  padding: 12px;
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  background-color: #000;
`;

export const SelectCountyButton = styled.button`
  flex-shrink: 0;
  padding: 6px 24px;
  display: flex;
  align-items: center;
  background-color: #fff;

  i {
    margin-left: 3px;
    font-size: 1.5em;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 6px;
`;

export const ZonesRow = styled.div`
  padding: 12px;
  margin-bottom: 12px;
`;

export const ZoneLabel = styled.span`
  display: inline-block;
  background-color: lightgray;
  font-size: 14px;
  padding: 3px;
  margin-right: 6px;

  &:last-child {
    margin-right: 0;
  }
`;
