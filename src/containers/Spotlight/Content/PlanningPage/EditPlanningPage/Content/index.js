import React from 'react';
import styled from 'styled-components';
import { fromJS } from 'immutable';
import SpotCard from './SpotCard';

const StyledContent = styled.div`
  padding: 15px 30px;
  .content__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .content__title-day {
    font-size: 16px
  }
  .content__title-date {
    font-size: 12px;
  }
`;

const mockSpotData = fromJS([
  {
    id: 0,
    name: '台北101',
    address: '110台北市信義區信義路五段7號',
    startTime: '09:00',
  },
  {
    id: 1,
    name: '台北101',
    address: '110台北市信義區信義路五段7號',
    startTime: '09:00',
  },
  {
    id: 2,
    name: '台北101',
    address: '110台北市信義區信義路五段7號',
    startTime: '09:00',
  },
  {
    id: 3,
    name: '台北101',
    address: '110台北市信義區信義路五段7號',
    startTime: '09:00',
  },
]);

const Content = (props) => {
  const {
    location,
  } = props;
  const searchParams = new URLSearchParams(location.search);
  const day = searchParams.get('day');
  return (
    <StyledContent>
      <div className="content__title">
        <div className="content__title-day">{`第${day}天`}</div>
        <div className="content__title-date">{`2019年6月${day}日`}</div>
      </div>
      {
        mockSpotData.map((spot) => (
          <SpotCard
            key={spot.get('id')}
            spot={spot}
          />
        ))
      }
    </StyledContent>
  );
};

export default Content;
