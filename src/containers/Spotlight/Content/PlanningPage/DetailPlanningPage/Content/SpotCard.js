import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    flex-direction: column;
    justify-content: center;
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
`;

const SpotCard = ({ spot }) => (
  <StyledSpotCard>
    <div className="spot-card__card-row">
      <div className="spot-card__start-end-time-wrapper">
        <div>8:00</div>
        <div>|</div>
        <div>10:00</div>
      </div>
      <div className="spot-card__card-body">
        <div className="spot-card__card-body-spot-title">{spot.get('name')}</div>
        <div className="spot-card__card-body-address">{spot.get('address')}</div>
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

SpotCard.propTypes = {
  spot: PropTypes.object,
};

SpotCard.defaultProps = {
  spot: {},
};

export default SpotCard;
