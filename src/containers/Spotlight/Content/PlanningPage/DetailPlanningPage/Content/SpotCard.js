import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, List } from 'immutable';
import moveIconPath from 'assets/move_icon.svg';
import { getTravelingData } from './utils';

export const HEIGHT_SPOT_CARD = 60;
export const HEIGHT_SPOT_TRAVEL_TIME = 40;

const StyledSpotCard = styled.div`
  height: ${HEIGHT_SPOT_CARD + HEIGHT_SPOT_TRAVEL_TIME}px;
  .spot-card__card-row {
    height: ${HEIGHT_SPOT_CARD}px;
    display: flex;
  }
  .spot-card__card-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
  }
  .spot-card__card-body-spot-title {
    font-size: 16px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
  }
  .spot-card__card-body-address {
    font-size: 12px;
    color: rgba(170, 170, 170, 1);
  }
  .spot-card__start-end-time-wrapper {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(51, 51, 51, 1);
  }
  .spot-card__travel-row-wrapper {
    display: flex;
    height: ${HEIGHT_SPOT_TRAVEL_TIME}px;
    align-items: center;
    justify-content: flex-end;
  }
  .spot-card__travel-time-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: rgba(170, 170, 170, 1);
    margin-left: 15px;
  }
  .spot-card__travel-time-icon {
    margin-right: 5px;
    color: rgba(51, 51, 51, 1);
  }
  .spot-card__move-icon {
    cursor: move;
  }
`;

const SpotCard = (props) => {
  const {
    isOwner,
    plan,
    index,
    spotIndexInfo,
    spots,
    handleFetchSpotById,
  } = props;
  const spot = spots.get(String(spotIndexInfo.get('spot_id')));
  useEffect(() => {
    if (!spot) {
      handleFetchSpotById(spotIndexInfo.get('spot_id'));
    }
  }, []);
  if (!spot) {
    return null;
  }

  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const planIndex = day - 1;
  const dayPlan = plan.get(planIndex);
  if (!dayPlan) {
    return <div>dayPlan is null</div>;
  }
  const dayStartTime = dayPlan.get('start_time');
  const arrange = dayPlan.get('arrange');
  if (!arrange.size) {
    return null;
  }
  const spotIds = arrange.map((arr) => arr.get('spot_id'));
  const isAllSpotsReady = spotIds
    .map((sid) => Boolean(spots.get(sid.toString())))
    .toJS()
    .reduce((a, b) => a === true && b === true);

  if (!isAllSpotsReady) {
    return null;
  }
  const travelingData = getTravelingData({
    spotIds,
    dayStartTime,
    spots,
    arrange,
  });
  const spotInfo = travelingData.find((td) => td.get('id') === spotIndexInfo.get('spot_id'));

  return (
    <StyledSpotCard>
      <div className="spot-card__card-row">
        <div className="spot-card__start-end-time-wrapper">
          <div>{spotInfo.get('startTime')}</div>
          <div>|</div>
          <div>{spotInfo.get('endTime')}</div>
        </div>
        <div className="spot-card__card-body">
          <div>
            <div className="spot-card__card-body-spot-title">{spot.get('name')}</div>
            <div className="spot-card__card-body-address">{spot.get('address')}</div>
          </div>
          {
            isOwner && <img src={moveIconPath} className="spot-card__move-icon my-handle" alt="" />
          }
        </div>
      </div>
      {
        !(arrange.size - 1 === index) &&
        <div className="spot-card__travel-row-wrapper">
          <div className="spot-card__travel-time-wrapper">
            <i className="fas fa-car spot-card__travel-time-icon" />
            <div>{spotInfo.get('driveTimeText')}</div>
          </div>
          <div className="spot-card__travel-time-wrapper">
            <i className="fas fa-running spot-card__travel-time-icon" />
            <div>{spotInfo.get('walkTimeText')}</div>
          </div>
        </div>
      }
    </StyledSpotCard>
  );
};

SpotCard.propTypes = {
  isOwner: PropTypes.bool,
  index: PropTypes.number,
  plan: PropTypes.instanceOf(List),
  spotIndexInfo: PropTypes.instanceOf(Map),
  spots: PropTypes.instanceOf(Map),
  handleFetchSpotById: PropTypes.func,
};

SpotCard.defaultProps = {
  isOwner: false,
  index: 0,
  plan: List(),
  spotIndexInfo: Map(),
  spots: Map(),
  handleFetchSpotById: () => { },
};

export default SpotCard;
