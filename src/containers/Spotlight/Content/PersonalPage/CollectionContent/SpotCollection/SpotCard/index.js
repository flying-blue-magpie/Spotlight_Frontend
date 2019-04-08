import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { createStructuredSelector } from 'reselect';
import { selectSpots } from 'containers/Spotlight/selectors';
import redHeartCircleIconPath from 'assets/red_heart_circle_icon.svg';
import {
  fetchSpotById,
} from 'containers/Spotlight/actions';

const StyledSpotCard = styled.div`
  height: 140px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  overflow: hidden;
  .spot-card__title-wrapper {
    position: absolute;
    bottom: 0;
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 5px 0px;
    font-weight: 500;
  }
  .spot-card__title {
    font-size: 12px;
  }
  .spot-card__heart-wrapper {
    display: flex;
    align-items: center;
    .spot-card__heart-icon {
      padding-right: 6px;
      width: 30px;
      height: 30px;
    }
  }
`;

/* eslint no-shadow: 0 */
const SpotCard = ({
  spots,
  spotId,
  fetchSpotById,
  handleOnClick,
}) => {
  useEffect(() => {
    if (!spots.get(spotId)) {
      fetchSpotById(spotId);
    }
  }, []);

  const spot = spots.get(spotId);

  if (!spot) {
    return null;
  }
  const imagePath = spot.get('pic').get(0);
  return (
    <StyledSpotCard
      imagePath={imagePath}
      data-id={spotId}
      data-redirect-path={PAGE_NAME.EXPLORE.name}
      onClick={handleOnClick}
    >
      <div className="spot-card__title-wrapper">
        <span className="spot-card__title">{spot.get('name')}</span>
        <div className="spot-card__heart-wrapper">
          <img src={redHeartCircleIconPath} className="spot-card__heart-icon" alt="" />
          <div>{spot.get('like_num') || 0}</div>
        </div>
      </div>
    </StyledSpotCard>
  );
};

SpotCard.propTypes = {
  spots: PropTypes.object.isRequired,
  spotId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  fetchSpotById: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spots: selectSpots(),
});

export default connect(mapStateToProps, { fetchSpotById })(SpotCard);
