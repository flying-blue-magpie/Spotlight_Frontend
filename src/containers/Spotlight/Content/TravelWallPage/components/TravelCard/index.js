import React from 'react';
import styled from 'styled-components';

const StyledTravelCard = styled.div`
  margin-top: 10px;
  .travel-card__header-wrapper {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: #D3D3D3;
    .travel-card__header-image {
      font-size: 30px;
      color: white;
    }
    .travel-card__profile-wrapper {
      margin-left: 10px;
    }
    .travel-card__header-name {
      font-size: 12px;
      color: #707070;
    }
    .travel-card__header-time {
      font-size: 12px;
      color: #A4A4A4;
    }
  }
  .travel-card__body-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 120px;
    padding: 10px;
    background: #C6C6C6;
    color: white;
    .travel-card__body-title {
      font-size: 16px;
    }
    .travel-card__body-period {
      font-size: 12px;
    }
  }
  .travel-card__footer-wrapper {
    background: #D3D3D3;
    padding: 13px 12px;
    display: flex;
    align-items: center;
    .travel-card__footer-icon {
      font-size: 16px;
      color: #707070;
    }
    .travel-card__footer-number {
      font-size: 12px;
      color: #707070;
      margin-left: 5px;
    }
  }
`;

const TravelCard = () => (
  <StyledTravelCard>
    <div className="travel-card__header-wrapper">
      <i className="fas fa-user-circle travel-card__header-image" />
      <div className="travel-card__profile-wrapper">
        <div className="travel-card__header-name">這裡是名字</div>
        <div className="travel-card__header-time">1天前</div>
      </div>
    </div>
    <div className="travel-card__body-wrapper">
      <div className="travel-card__body-title">台北購物之旅</div>
      <div className="travel-card__body-period">2019年6月5日-2019年6月9日 / 4天</div>
    </div>
    <div className="travel-card__footer-wrapper">
      <i className="far fa-heart travel-card__footer-icon" />
      <div className="travel-card__footer-number">666</div>
    </div>
  </StyledTravelCard>
);

export default TravelCard;
