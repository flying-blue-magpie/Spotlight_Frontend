import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import {
  selectFavoriteSpotIds,
} from 'containers/Spotlight/selectors';
import SpotCard from './SpotCard';

const StyledSpotCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 15px;
  background-color: #FAFAFA;
  min-height: 100%;
`;

const SpotCollection = ({
  favoriteSpotIds,
  handleOnClick,
}) => {
  const cards = favoriteSpotIds.map((value) => value);
  return (
    <StyledSpotCollection>
      {
        cards.map((card) => (
          <SpotCard
            key={card}
            spotId={card}
            handleOnClick={handleOnClick}
          />
        ))
      }
    </StyledSpotCollection>
  );
};

SpotCollection.propTypes = {
  favoriteSpotIds: PropTypes.instanceOf(List),
  handleOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  favoriteSpotIds: selectFavoriteSpotIds(),
});

export default connect(mapStateToProps)(SpotCollection);
