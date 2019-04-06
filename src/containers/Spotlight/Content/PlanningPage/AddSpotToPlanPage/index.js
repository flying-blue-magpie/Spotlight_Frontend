import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, List } from 'immutable';
import {
  selectFavoriteSpotIdsMeta,
  selectFavoriteSpotIds,
} from 'containers/Spotlight/selectors';
import {
  fetchFavoriteSpotIds,
} from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';
import LikedSpotCard from './LikedSpotCard';

const AddSpotToPlanPageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px 13px;
  grid-gap: 10px 7px;
`;

const AddSpotToPlanPage = (props) => {
  const {
    // location: {
    //   state: {
    //     afterIndex,
    //   },
    // },
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
          />
        ))
      }
    </AddSpotToPlanPageContainer>
  );
};

AddSpotToPlanPage.propTypes = {
  // location: PropTypes.object,
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
  favoriteSpotIds: PropTypes.instanceOf(List),
};

AddSpotToPlanPage.defaultProps = {
  // location: {},
  favoriteSpotIds: List(),
};

const mapStateToProps = createStructuredSelector({
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
  favoriteSpotIds: selectFavoriteSpotIds(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotToPlanPage);
