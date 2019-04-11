import styled from 'styled-components';

export const Container = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  padding: 10px 0 10px 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .16);
  display: flex;
`;

export const UserImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const UserName = styled.div`
  flex-basis: 100%;
  color: #333333;
  font-size: 18px;
  font-weight: bold;
  padding-left: 17px;
`;

export const Stats = styled.div`
  flex-basis: 100%;
  display: flex;
`;

export const Stat = styled.div`
  flex: 1;
  position: relative;

  &:not(:last-child) {
    &:after {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      border-right: solid 1px #AAAAAA;
      height: 85%;
      content: '';
    }
  }
`;

export const StatName = styled.div`
  color: #AAAAAA;
  font-size: 12px;
  text-align: center;
`;

export const StatNumber = styled.div`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;
