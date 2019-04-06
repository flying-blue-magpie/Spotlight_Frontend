import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';

const StyledSpotCard = styled.div`
  height: 100px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  position: relative;
  cursor: pointer;
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

const SpotCard = ({ spotId, handleOnClick }) => {
  const imagePath = 'https://www.taipei-101.com.tw/upload/jn_now/201801/2018010102515956G575BF.jpg';
  return (
    <StyledSpotCard
      imagePath={imagePath}
      data-id={spotId}
      data-redirect-path={PAGE_NAME.EXPLORE.name}
      onClick={handleOnClick}
    >
      <div className="spot-card__title-wrapper">
        <span className="spot-card__title">台北101</span>
      </div>
    </StyledSpotCard>
  );
};

SpotCard.propTypes = {
  spotId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  handleOnClick: PropTypes.func,
};

SpotCard.propTypes = {
  handleOnClick: () => { },
};

export default SpotCard;
