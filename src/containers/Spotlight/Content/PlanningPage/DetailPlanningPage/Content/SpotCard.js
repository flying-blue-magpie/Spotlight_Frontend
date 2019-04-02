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
    background: #D3D3D3;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 15px;
  }
  .spot-card__card-body-address {
    font-size: 12px;
  }
  .spot-card__start-end-time-wrapper {
    width: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    color: #707070;
    margin-left: 15px;
  }
  .spot-card__travel-time-icon {
    margin-right: 5px;
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
        <div>{spot.get('name')}</div>
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
