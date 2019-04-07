import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { createStructuredSelector } from 'reselect';
import { selectSpots } from 'containers/Spotlight/selectors';
import {
  fetchSpotById,
} from 'containers/Spotlight/actions';

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
      data-redirect-path={PAGE_NAME.EXPLORE}
      onClick={handleOnClick}
    >
      <div className="spot-card__title-wrapper">
        <span className="spot-card__title">{spot.get('name')}</span>
      </div>
    </StyledSpotCard>
  );
};

SpotCard.propTypes = {
  spots: PropTypes.instanceOf(Map),
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
