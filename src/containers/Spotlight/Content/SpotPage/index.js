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
  height: 220px;
  width: 100%;
  object-fit: cover;
`;

const FeatureInfo = styled.div`
  position: absolute;
  width: calc(100% - 2 * 12px);
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  background-color: rgba(255, 255, 255, .7);
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

  return (
    <div>
      <Feature>
        <FeatureImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
        <FeatureInfo>
          {spot.get('name')}
          <i className="fas fa-heart">666</i>
        </FeatureInfo>
      </Feature>
      <div>景點介紹</div>
      <p>
        {spot.get('describe')}
      </p>
      <div>地址</div>
      <p>{spot.get('address')}</p>
      <div>電話</div>
      <p>{spot.get('tel')}</p>
      <div>網址</div>
      <a href={spot.get('website')}>{spot.get('website')}</a>
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
