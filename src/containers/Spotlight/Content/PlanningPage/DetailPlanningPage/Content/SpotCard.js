import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSpotCard = styled.div`
  color: #707070;
  display: flex;
  .spot-card__operator-wrapper {
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .spot-card__operator-divider {
    width: 1px;
    height: 28px;
    position: absolute;
    background: grey;
  }
  .spot-card__operator-divider-top {
    top: -10px;
  }
  .spot-card__operator-divider-bottom {
    bottom: -7px;
  }
  .spot-card__spot-operator {
    z-index: 1;
    border: 1px solid grey;
    border-radius: 100%;
    width: 25px;
    height: 25px;
    background: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    &:hover {
      background: #eee;
    }
  }

  .spot-card__start-time-wrapper {
    padding: 0px 7px;
    width: 63px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spot-card__start-time-label {
    font-size: 14px;
    margin-bottom: 2px;
  }
  .spot-card__start-time {
    font-size: 14px;
  }

  .spot-card__body-wrapper {
    padding: 10px 7px;
    background: #D3D3D3;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .spot-card__body-name {
    font-size: 14px;
    margin-bottom: 2px;
  }
  .spot-card__body-address {
    font-size: 12px;
  }
`;

const StyledTravelTime = styled.div`
  display: flex;
  justify-content: space-between;
  .travel-time__operator-wrapper {
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .travel-time__add-spot-btn {
    font-size: 30px;
    color: #707070;
    z-index: 1;
  }
  .travel-time__time-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0px;
    color: #707070;
    font-size: 12px;
  }
  .travel-time__time-item-wrapper {
    display: flex;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
  }
  .travel-time__time-item-icon {
    margin-right: 5px;
  }
`;

const SpotCard = ({ spot, index }) => (
  <>
    <StyledSpotCard>
      <div className="spot-card__operator-wrapper">
        {
          Boolean(index) &&
          <div className="spot-card__operator-divider spot-card__operator-divider-top" />
        }
        <div className="spot-card__spot-operator"><span>{index + 1}</span></div>
        <div className="spot-card__operator-divider spot-card__operator-divider-bottom" />
      </div>
      <div className="spot-card__start-time-wrapper">
        <div className="spot-card__start-time-label">08:00</div>
        <div>|</div>
        <div className="spot-card__start-time">{spot.get('startTime')}</div>
      </div>
      <div className="spot-card__body-wrapper">
        <div className="spot-card__body-name">{spot.get('name')}</div>
        <div className="spot-card__body-address">{spot.get('address')}</div>
      </div>
    </StyledSpotCard>
    <StyledTravelTime>
      <div className="travel-time__operator-wrapper">
        <i className="fas fa-map-marker-alt travel-time__add-spot-btn" />
      </div>
      <div className="travel-time__time-wrapper">
        <div className="travel-time__time-item-wrapper">
          <i className="fas fa-car travel-time__time-item-icon" />
          <div>1時15分</div>
        </div>
        <div className="travel-time__time-item-wrapper">
          <i className="fas fa-running travel-time__time-item-icon" />
          <div>6時15分</div>
        </div>
      </div>
    </StyledTravelTime>
  </>
);

SpotCard.propTypes = {
  spot: PropTypes.object,
  index: PropTypes.number,
};

SpotCard.defaultProps = {
  spot: {},
  index: 0,
};

export default SpotCard;
