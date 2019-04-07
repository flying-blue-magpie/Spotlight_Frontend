import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Spinner from 'components/Spinner';

const HEIGHT_SPOT_CARD = 140;

const LikedSpotCardContainer = styled.div`
  width: 100%;
height: ${HEIGHT_SPOT_CARD}px;
  background: red;
`;

const LikedSpotCard = ({
  spotId,
  spots,
  handleFetchSpotById,
}) => {
  const foundSpotDetail = spots.get(spotId);
  useEffect(() => {
    if (!foundSpotDetail) {
      handleFetchSpotById(spotId);
    }
  }, []);
  if (!foundSpotDetail) {
    return <Spinner height={HEIGHT_SPOT_CARD} />;
  }

  return (
    <LikedSpotCardContainer>
      {foundSpotDetail.get('name')}
    </LikedSpotCardContainer>
  );
};

LikedSpotCard.propTypes = {
  spotId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  spots: PropTypes.instanceOf(Map),
  handleFetchSpotById: PropTypes.func,
};

LikedSpotCard.defaultProps = {
  // favoriteSpotIds: List(),
  // match: {},
  spots: Map(),
  handleFetchSpotById: () => {},
};

export default LikedSpotCard;
