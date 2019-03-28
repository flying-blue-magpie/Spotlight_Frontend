import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';

const StyledPlanningCard = styled.div`
  height: 100px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  position: relative;
  cursor: pointer;
  .planning-card__title-wrapper {
    position: absolute;
    bottom: 0;
    background: white;
    width: 100%;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
  .planning-card__title {
    font-size: 11px;
  }

  .planning-card__profile-wrapper {
    display: flex;
    color: white;
    padding: 10px;
    .planning-card__profile-favicon {
      height: 20px;
      width: 20px;
      background-image: url(${(props) => props.faviconPath});
      background-size: cover;
      border-radius: 100%;
    }
    .planning-card__profile-name {
      color: white;
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

const PlanningCard = ({ planningId, handleOnClick }) => {
  const imagePath = 'https://cw1.tw/CW/opinion/images/common/201801/opinion-5a618a5f20fb8.jpg';
  const faviconPath = 'https://img.ltn.com.tw/Upload/liveNews/BigPic/600_php7mZoYr.jpg';
  return (
    <StyledPlanningCard
      imagePath={imagePath}
      data-id={planningId}
      data-redirect-path={PAGE_NAME.DETAIL_PLANNING}
      onClick={handleOnClick}
    >
      <div className="planning-card__profile-wrapper">
        <img className="planning-card__profile-favicon" src={faviconPath} alt="" />
        <div className="planning-card__profile-name">這裡是名字</div>
      </div>
      <div className="planning-card__title-wrapper">
        <span className="planning-card__title">台北購物之旅</span>
      </div>
    </StyledPlanningCard>
  );
};

PlanningCard.propTypes = {
  planningId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  handleOnClick: PropTypes.func,
};

PlanningCard.propTypes = {
  handleOnClick: () => { },
};

export default PlanningCard;
