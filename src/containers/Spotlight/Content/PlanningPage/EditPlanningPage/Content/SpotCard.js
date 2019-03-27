import React from 'react';
import styled from 'styled-components';

const StyledSpotCard = styled.div`
  margin-top: 15px;
  background: #D3D3D3;
  color: #707070;
  display: flex;
  .spot-card__start-time-wrapper {
    background: #ECECEC;
    padding: 17px 7px;
    width: 63px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .spot-card__start-time-label {
    font-size: 12px;
    margin-bottom: 2px;
  }
  .spot-card__start-time {
    font-size: 16px;
  }

  .spot-card__body-wrapper {
    padding: 17px 7px;
  }
  .spot-card__body-name {
    font-size: 14px;
    margin-bottom: 2px;
  }
  .spot-card__body-address {
    font-size: 12px;
  }
`;

const SpotCard = ({ spot }) => {
  return (
    <StyledSpotCard>
      <div className='spot-card__start-time-wrapper'>
        <div className="spot-card__start-time-label">出發時間</div>
        <div className="spot-card__start-time">{spot.get('startTime')}</div>
      </div>
      <div className="spot-card__body-wrapper">
        <div className="spot-card__body-name">{spot.get('name')}</div>
        <div className="spot-card__body-address">{spot.get('address')}</div>
      </div>
    </StyledSpotCard>
  );
};

export default SpotCard;
