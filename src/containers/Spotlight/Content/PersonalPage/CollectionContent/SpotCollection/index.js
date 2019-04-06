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
  padding: 10px 28px;
`;

const SpotCollection = ({
  favoriteSpotIds,
}) => {
  const cards = favoriteSpotIds.map((value) => value);
  return (
    <StyledSpotCollection>
      {
        cards.map((card) => (
          <SpotCard
            key={card}
            spotId={card}
          />
        ))
      }
    </StyledSpotCollection>
  );
};

SpotCollection.propTypes = {
  favoriteSpotIds: PropTypes.instanceOf(List),
};

const mapStateToProps = createStructuredSelector({
  favoriteSpotIds: selectFavoriteSpotIds(),
});

export default connect(mapStateToProps)(SpotCollection);
