import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LikedSpotCardContainer = styled.div`
  width: 100%;
  height: 140px;
  background: red;
`;

const LikedSpotCard = ({
  spotId,
}) => (
  <LikedSpotCardContainer>
    {spotId}
  </LikedSpotCardContainer>
);

LikedSpotCard.propTypes = {
  spotId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

LikedSpotCard.defaultProps = {
  // favoriteSpotIds: List(),
  // match: {},
};

export default LikedSpotCard;
