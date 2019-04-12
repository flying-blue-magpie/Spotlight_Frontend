import React, { useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import { selectSpotMeta, selectSpots, selectFavoriteSpotIds } from 'containers/Spotlight/selectors';
import {
  fetchSpotById,
  fetchFavoriteSpotIds,
  likeSpot,
  cancelLikeSpot,
} from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';
import Context from 'containers/Spotlight/Context';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';

import {
  Feature,
  FeatureImage,
  FeatureInfo,
  Title,
  LikeButton,
  Paragraph,
  SpotName,
  Container,
  BackButton,
  AddButton,
} from './Styled';

const { SpotlightContext } = Context;

const SpotPage = ({
  match,
  spots,
  handleFetchSpotById,
  setSpotMeta,
  location,
  handleFetchFavoriteSpotIds,
  favoriteSpotIds,
  handleLikeSpot,
  handleCancelLikeSpot,
}) => {
  const { setIsHeaderVisible } = useContext(SpotlightContext);
  const { spotId } = match.params;
  const isSpotFavorite = favoriteSpotIds.includes(Number(spotId));

  useEffect(() => {
    handleFetchSpotById(spotId);
    handleFetchFavoriteSpotIds();
    setIsHeaderVisible(false);

    return () => {
      setIsHeaderVisible(true);
    };
  }, []);

  const handleLikeOnClick = useCallback(() => {
    if (isSpotFavorite) {
      handleCancelLikeSpot(Number(spotId));
    } else {
      handleLikeSpot(Number(spotId));
    }
  });

  if (setSpotMeta.get('isLoading')) {
    return <Spinner />;
  }

  const spot = spots.get(Number(spotId), Map());
  if (!spot.size) {
    return <div>找不到該景點資料</div>;
  }
  return (
    <Container>
      <Feature>
        <BackButton onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left" />
        </BackButton>
        <AddButton to={`${location.pathname}/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}`}>
          <i className="fas fa-plus" />
        </AddButton>
        <FeatureImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
        <FeatureInfo>
          <SpotName>{spot.get('name')}</SpotName>
          <LikeButton
            onClick={handleLikeOnClick}
            isActive={isSpotFavorite}
            likeNumber={spot.get('like_num')}
          />
        </FeatureInfo>
      </Feature>
      <Title>景點介紹</Title>
      <Paragraph>
        {spot.get('describe')}
      </Paragraph>
      <Title>地址</Title>
      <Paragraph>{spot.get('address')}</Paragraph>
      <Title>電話</Title>
      <Paragraph>{spot.get('tel')}</Paragraph>
      {
        spot.get('website') &&
        <>
          <Title>網址</Title>
          <Paragraph>
            <a href={spot.get('website')}>{spot.get('website')}</a>
          </Paragraph>
        </>
      }
    </Container>
  );
};

SpotPage.propTypes = {
  match: PropTypes.object.isRequired,
  spots: PropTypes.instanceOf(Map),
  setSpotMeta: PropTypes.instanceOf(Map),
  handleFetchSpotById: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIds: PropTypes.instanceOf(List).isRequired,
  handleCancelLikeSpot: PropTypes.func.isRequired,
  handleLikeSpot: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spots: selectSpots(),
  setSpotMeta: selectSpotMeta(),
  favoriteSpotIds: selectFavoriteSpotIds(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchSpotById: (id) => dispatch(fetchSpotById(id)),
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
  handleLikeSpot: (id) => dispatch(likeSpot(id)),
  handleCancelLikeSpot: (id) => dispatch(cancelLikeSpot(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpotPage));
