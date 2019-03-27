import React from 'react';
import styled from 'styled-components';

const StyledSpotCard = styled.div`
  height: 100px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  position: relative;
  .spot-card__title-wrapper {
    position: absolute;
    bottom: 0;
    background: white;
    width: 100%;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
  .spot-card__title {
    font-size: 11px;
  }
`;

const SpotCard = () => {
  const imagePath = 'https://www.taipei-101.com.tw/upload/jn_now/201801/2018010102515956G575BF.jpg';
  return (
    <StyledSpotCard imagePath={imagePath}>
      <div className="spot-card__title-wrapper">
        <span className="spot-card__title">台北101</span>
      </div>
    </StyledSpotCard>
  );
};

export default SpotCard;
