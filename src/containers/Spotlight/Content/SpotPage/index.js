import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { createStructuredSelector } from 'reselect';
import { selectSpotMeta, selectSpots } from 'containers/Spotlight/selectors';
import { fetchSpotById } from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';
import Context from 'containers/Spotlight/Context';

import {
  Feature,
  FeatureImage,
  FeatureInfo,
  Title,
  LikeButton,
  Paragraph,
  SpotName,
  LikeLabel,
  Container,
} from './Styled';

const { SpotlightContext } = Context;

const SpotPage = ({
  match,
  spots,
  handleFetchSpotById,
  setSpotMeta,
}) => {
  const { setIsHeaderVisible } = useContext(SpotlightContext);

  useEffect(() => {
    handleFetchSpotById(match.params.spotId);
    setIsHeaderVisible(false);

    return () => {
      setIsHeaderVisible(true);
    };
  }, []);


  if (setSpotMeta.get('isLoading')) {
    return <Spinner />;
  }

  const spot = spots.get(Number(match.params.spotId), Map());
  if (!spot.size) {
    return <div>找不到該景點資料</div>;
  }
  return (
    <Container>
      <Feature>
        <FeatureImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
        <FeatureInfo>
          <SpotName>{spot.get('name')}</SpotName>
          <LikeLabel>
            <LikeButton className="fas fa-heart" />
            666
          </LikeLabel>
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
      <Title>網址</Title>
      <Paragraph>
        <a href={spot.get('website')}>{spot.get('website')}</a>
      </Paragraph>
    </Container>
  );
};

SpotPage.propTypes = {
  match: PropTypes.object.isRequired,
  spots: PropTypes.instanceOf(Map),
  setSpotMeta: PropTypes.instanceOf(Map),
  handleFetchSpotById: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spots: selectSpots(),
  setSpotMeta: selectSpotMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchSpotById: (id) => dispatch(fetchSpotById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotPage);
