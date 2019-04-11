import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Map, List } from 'immutable';
import moment from 'moment';

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
  .my-handle {
    cursor: move;
    font-size: 25px;
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
  const spot = spots.get(spotIndexInfo.get('spot_id'));
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
  return (
    <StyledSpotCard>
      <div className="spot-card__card-row">
        <div className="spot-card__start-end-time-wrapper">
          <div>{moment(startTime, 'HH:mm:ss').format('HH:mm')}</div>
          <div>|</div>
          <div>{moment(endTime, 'HH:mm:ss').format('HH:mm')}</div>
        </div>
        <div className="spot-card__card-body">
          <div>
            <div className="spot-card__card-body-spot-title">{spot.get('name')}</div>
            <div className="spot-card__card-body-address">{spot.get('address')}</div>
          </div>
          {
            isOwner && <i className="fas fa-bars my-handle" />
          }
        </div>
      </div>
      <div className="spot-card__travel-row-wrapper">
        <div className="spot-card__travel-time-wrapper">
          <i className="fas fa-car spot-card__travel-time-icon" />
          <div>1時15分</div>
        </div>
        <div className="spot-card__travel-time-wrapper">
          <i className="fas fa-running spot-card__travel-time-icon" />
          <div>6時15分</div>
        </div>
      </div>
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
