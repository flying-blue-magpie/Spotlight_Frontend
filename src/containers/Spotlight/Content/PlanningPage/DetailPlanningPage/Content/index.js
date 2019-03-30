import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// http://front-ender.me/react-drag-list
import ReactDragList from 'react-drag-list';
import 'react-drag-list/assets/index.css';
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
  .content__simple-drag {
    background: yellow;
  }
  .content__simple-drag-row {
    background: red;
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
    name: '宏亞食品巧克力觀光工廠',
    address: '桃園縣八德市建國路386號',
    startTime: '10:00',
  },
  {
    id: 2,
    name: '臺灣菸酒(股)公司林口觀光酒廠',
    address: '桃園縣龜山鄉文化一路55號',
    startTime: '12:00',
  },
  {
    id: 3,
    name: '台灣金屬創意館',
    address: '台南市永康區永科環路598號',
    startTime: '15:00',
  },
]);

const Content = (props) => {
  const {
    location,
  } = props;
  const searchParams = new URLSearchParams(location.search);
  const day = searchParams.get('day') || 1;
  return (
    <StyledContent>
      <div className="content__title">
        <div className="content__title-day">{`第${day}天`}</div>
        <div className="content__title-date">{`2019年6月${parseInt(day, 10) + 4}日`}</div>
      </div>
      <ReactDragList
        dataSource={mockSpotData}
        row={(spot) => (
          <SpotCard
            key={spot.get('id')}
            spot={spot}
          />
        )}
        handles={false}
        className="simple-drag"
        rowClassName="simple-drag-row"
        onUpdate={() => {}}
      />
    </StyledContent>
  );
};

Content.propTypes = {
  location: PropTypes.object,
};

Content.defaultProps = {
  location: {},
};

export default Content;
