import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { selectSpotMeta, selectSpots } from 'containers/Spotlight/selectors';
import { fetchSpotById } from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';

const Feature = styled.div`
  position: relative;
`;

const FeatureImage = styled.img`
  display: block;
  height: 150px;
  width: 100%;
  object-fit: cover;
`;

const FeatureInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  font-size: 16px;
`;

const Title = styled.div`
  padding: 0 12px;
  margin-bottom: 6px;
  font-size: 15px;
`;

const LikeButton = styled.i`
  margin-right: 3px;
`;

const Paragraph = styled.p`
  padding: 0 12px;
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SpotPage = ({
  match,
  spots,
  handleFetchSpotById,
  setSpotMeta,
}) => {
  useEffect(() => {
    handleFetchSpotById(match.params.spotId);
  }, []);

  if (setSpotMeta.get('isLoading')) {
    return <Spinner />;
  }

  const spot = spots.get(Number(match.params.spotId), Map());
  if (!spot.size) {
    return <div>找不到該景點資料</div>;
  }
  return (
    <div>
      <Feature>
        <FeatureImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
        <FeatureInfo>
          {spot.get('name')}
          <label>
            <LikeButton className="fas fa-heart" />
            666
          </label>
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
    </div>
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
