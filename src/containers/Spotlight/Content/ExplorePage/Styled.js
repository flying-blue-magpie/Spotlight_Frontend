import styled from 'styled-components';

export const Container = styled.div`
`;

export const Card = styled.div`
  display: block;
  width: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px;
  background-color: #FFFFFF;
`;

export const SpotName = styled.span`
  flex-grow: 1;
  text-overflow: ellipsis;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  font-size: 18px;
  
  &,
  &:active,
  &:focus,
  &:visited,
  &:hover {
    color: #333333;
  }
`;

export const SpotLikes = styled.span`
  flex-shrink: 0;
  font-size: 14px;

  &,
  &:active,
  &:focus,
  &:visited,
  &:hover {
    color: #AAAAAA;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Button = styled.button`
  display: block;
  width: 50px;
  height: 50px;
  background: lightgray;
  border-radius: 50%;
  font-size: 18px;
  color: #fff;
  margin-bottom: 3px;
`;

export const ButtonLabel = styled.label`
  margin-right: 16px;
  text-align: center;
  font-size: 14px;

  &:last-child {
    margin-right: 0;
  }
`;

export const CardRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchRow = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(#F9D94A 50%, transparent 50%);
  padding: 3px 15px 15px;
`;

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const SelectCountyButton = styled.button`
  flex-shrink: 0;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background-color: #fff;
  appearance: none;
  border: 0;
  position: relative;

  i {
    margin-left: 3px;
    font-size: 1.5em;
  }

  &:after {
    content : "";
    position: absolute;
    right: 0;
    z-index: 100;
    top: 50%;
    width: 1px;
    transform: translateY(-50%);
    height: 70%;
    background: #B5B5B5;
  }
`;

const searchInputLeftPadding = '33px';

export const SearchInputContainer = styled.div`
  position: relative;
  flex-grow: 1;
  background-color: #fff;

  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f002";
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: calc(${searchInputLeftPadding} / 2);
    transform: translate(-50%, -50%);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 9px 9px 9px ${searchInputLeftPadding};
  appearance: none;
  border: 0;
`;

export const ZonesRow = styled.div`
  padding: 0 12px;
  margin-bottom: 30px;
`;

export const ZoneLabel = styled.span`
  display: inline-block;
  background-color: #EEEEEE;
  color: #AAAAAA;
  font-size: 12px;
  padding: 2px 5px;
  margin-right: 10px;
  border-radius: 12px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ZoneLabelCrossIcon = styled.i`
  margin-left: 5px;
`;
