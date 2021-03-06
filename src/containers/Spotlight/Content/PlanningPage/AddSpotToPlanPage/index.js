import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, List } from 'immutable';
import {
  selectFavoriteSpotIdsMeta,
  selectFavoriteSpotIds,
  selectSpots,
} from 'containers/Spotlight/selectors';
import {
  fetchFavoriteSpotIds,
  fetchSpotById,
} from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';
import LikedSpotCard from './LikedSpotCard';

const AddSpotToPlanPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 13px;
  grid-gap: 7px 7px;
`;

const AddSpotToPlanPage = (props) => {
  const {
    favoriteSpotIdsMeta,
    favoriteSpotIds,
    handleFetchFavoriteSpotIds,
  } = props;
  const isLoaded = favoriteSpotIdsMeta.get('isLoaded');
  const isLoading = favoriteSpotIdsMeta.get('isLoading');
  useEffect(() => {
    if (!isLoaded) {
      handleFetchFavoriteSpotIds();
    }
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <AddSpotToPlanPageContainer>
      {
        favoriteSpotIds.map((spotId) => (
          <LikedSpotCard
            key={spotId}
            spotId={spotId}
            {...props}
          />
        ))
      }
    </AddSpotToPlanPageContainer>
  );
};

AddSpotToPlanPage.propTypes = {
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
  favoriteSpotIds: PropTypes.instanceOf(List),
};

AddSpotToPlanPage.defaultProps = {
  favoriteSpotIds: List(),
};

const mapStateToProps = createStructuredSelector({
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
  favoriteSpotIds: selectFavoriteSpotIds(),
  spots: selectSpots(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
  handleFetchSpotById: (spotId) => dispatch(fetchSpotById(spotId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotToPlanPage);
