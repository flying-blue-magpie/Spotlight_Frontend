import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// http://front-ender.me/react-drag-list
import ReactDragList from 'react-drag-list';
import 'react-drag-list/assets/index.css';
import { fromJS } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import mapPlusIconPath from 'assets/map_plus_icon.svg';
import {
  findAttributeInEvent,
} from 'utils/event';

import SpotCard, {
  HEIGHT_SPOT_CARD,
  HEIGHT_SPOT_TRAVEL_TIME,
} from './SpotCard';

const StyledContent = styled.div`
  padding: 15px 15px;
  padding-top: 0;
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

  .content__spot-cards-wrapper {
    display: flex;
  }
  .content__spot-simple-drag {
    flex: 1 1 auto;
  }
`;

const SpotOperator = styled.div`
  height: ${HEIGHT_SPOT_CARD + HEIGHT_SPOT_TRAVEL_TIME}px;
  .operator__number-wrapper {
    height: ${HEIGHT_SPOT_CARD}px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .operator__number-circle-border {
    border: 2px solid rgba(51, 51, 51, 1);
    color: rgba(51, 51, 51, 1);
    font-size: 16px;
    font-weight: 500;
    border-radius: 100%;
    width: 29px;
    height: 29px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;
    background: white;
    &:hover {
      background: rgba(51, 51, 51, 1);
      color: ${(props) => props.theme.mainColor};
    }
  }
  .operator__divider-line {
    position: absolute;
    width: 2px;
    background: rgba(170, 170, 170, 1);
    height: 40px;
  }
  .operator__divider-line-top {
    top: -20px;
  }
  .operator__divider-line-bottom {
    bottom: -20px;
  }
  .operator__map-marker-wrapper {
    height: ${HEIGHT_SPOT_TRAVEL_TIME}px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .operator__map-marker-icon {
    height: 33px;
    z-index: 1;
    background: white;
    cursor: pointer;
    &:hover {
      color: #bbbbbb;
    }
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
  const handleGoToAddSpot = useCallback((event) => {
    const { projectId } = props.match.params;
    const { search } = props.location;
    const insertAfterIndex = findAttributeInEvent(event, 'data-index');
    const addSpotToPlanPagePath = `/${PAGE_NAME.ADD_SPOT_TO_PLAN.name}/${projectId}`;
    history.push({
      pathname: addSpotToPlanPagePath,
      search: `${search}?&afterIndex=${insertAfterIndex}`,
      state: { afterIndex: insertAfterIndex },
    });
  });
  return (
    <StyledContent>
      <div className="content__spot-cards-wrapper">
        <div>
          {
            mockSpotData.map((spot, index) => (
              <SpotOperator key={spot.get('id')}>
                <div className="operator__number-wrapper">
                  {
                    Boolean(index) &&
                    <div className="operator__divider-line operator__divider-line-top" />
                  }
                  <div className="operator__number-circle-border"><span>{spot.get('id') + 1}</span></div>
                  <div className="operator__divider-line operator__divider-line-bottom" />
                </div>
                <div
                  role="presentation"
                  className="operator__map-marker-wrapper"
                  data-index={spot.get('id') + 1}
                  onClick={handleGoToAddSpot}
                >
                  <img src={mapPlusIconPath} className="operator__map-marker-icon" alt="" />
                </div>
              </SpotOperator>
            ))
          }
        </div>
        <ReactDragList
          dataSource={mockSpotData}
          row={(spot, index) => (
            <SpotCard
              key={spot.get('id')}
              spot={spot}
              index={index}
            />
          )}
          handles={false}
          className="simple-drag content__spot-simple-drag"
          rowClassName="simple-drag-row"
          onUpdate={() => { }}
        />
      </div>
    </StyledContent>
  );
};

Content.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
};

Content.defaultProps = {
  location: {},
  match: {},
};

export default Content;
