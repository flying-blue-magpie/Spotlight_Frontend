import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, List } from 'immutable';
import moment from 'moment';
import { getDistance } from 'utils/distance';
import moveIconPath from 'assets/move_icon.svg';

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
  if (!spot) {
    handleFetchSpotById(spotIndexInfo.get('spot_id'));
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
  const startTime = index === 0
    ? dayStartTime
    : moment(dayStartTime, 'HH:mm:ss').add(arrange.map((arr) => arr.get('during')).toJS().splice(0, index).reduce((a, b) => a + b), 'minutes');
  const duringTime = arrange.getIn([index, 'during']);
  const endTime = moment(startTime, 'HH:mm:ss').add(duringTime, 'minutes');

  let driveTime = '1時15分';
  let walkTime = '6時15分';
  const carSpeed = 30;
  const walkSpeed = 10;
  if (!(arrange.size - 1 === index)) {
    if (!arrange.getIn([index, 'spot_id']) || !arrange.getIn([index + 1, 'spot_id'])) {
      return null;
    }
    const spotA = spots.get(arrange.getIn([index, 'spot_id']).toString());
    const spotB = spots.get(arrange.getIn([index + 1, 'spot_id']).toString());
    if (!spotA) {
      handleFetchSpotById(arrange.getIn([index, 'spot_id']));
      return null;
    }
    if (!spotB) {
      handleFetchSpotById(arrange.getIn([index + 1, 'spot_id']));
      return null;
    }
    const distance = getDistance(spotA.get('px'), spotA.get('py'), spotB.get('px'), spotB.get('py')) / 1000;
    driveTime = `${Math.round(distance / carSpeed)}時${Math.floor(((distance / carSpeed) - Math.floor(distance / carSpeed)) * 60)}分`;
    walkTime = `${Math.round(distance / walkSpeed)}時${Math.floor(((distance / walkSpeed) - Math.floor(distance / walkSpeed)) * 60)}分`;
  }

  let driveHour = 0;
  let driveMinute = 0;
  if (index > 0) {
    if (!arrange.getIn([index, 'spot_id']) || !arrange.getIn([index - 1, 'spot_id'])) {
      return null;
    }
    const spotA = spots.get(arrange.getIn([index, 'spot_id']).toString());
    const spotB = spots.get(arrange.getIn([index - 1, 'spot_id']).toString());
    if (!spotA) {
      handleFetchSpotById(arrange.getIn([index, 'spot_id']));
      return null;
    }
    if (!spotB) {
      handleFetchSpotById(arrange.getIn([index - 1, 'spot_id']));
      return null;
    }
    const distance = getDistance(spotA.get('px'), spotA.get('py'), spotB.get('px'), spotB.get('py')) / 1000;
    driveHour = Math.round(distance / carSpeed);
    driveMinute = Math.floor(((distance / carSpeed) - Math.floor(distance / carSpeed)) * 60);
  }

  return (
    <StyledSpotCard>
      <div className="spot-card__card-row">
        <div className="spot-card__start-end-time-wrapper">
          <div>{moment(startTime, 'HH:mm:ss').add(driveHour, 'hours').add(driveMinute, 'minutes').format('HH:mm')}</div>
          <div>|</div>
          <div>{moment(endTime, 'HH:mm:ss').format('HH:mm')}</div>
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
            <div>{driveTime}</div>
          </div>
          <div className="spot-card__travel-time-wrapper">
            <i className="fas fa-running spot-card__travel-time-icon" />
            <div>{walkTime}</div>
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
