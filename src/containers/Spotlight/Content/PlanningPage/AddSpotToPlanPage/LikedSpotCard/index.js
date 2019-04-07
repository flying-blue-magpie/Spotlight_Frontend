import React, { useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Spinner from 'components/Spinner';
import ImageGallery from 'react-image-gallery';

import redHeartCircleIconPath from 'assets/red-heart-circle-icon.svg';

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const HEIGHT_SPOT_CARD = 140;

const LikedSpotCardContainer = styled.div`
  width: 100%;
  height: ${HEIGHT_SPOT_CARD}px;
  background: red;
  position: relative;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  cursor: pointer;

  .liked-spot-card__card-wrapper {
    position: absolute;
    width: 100%;
    height: 100px;
    border-radius: 10px;
  }

  .image-gallery-image {
    height: 100px;
    max-height: 100px;
  }
  .image-gallery-slides {
    border-radius: 10px 10px 0px 0px;
  }

  .liked-spot-card__card-cover {
    height: 100%;
  }
  .liked-spot-card__card-title-wrapper {
    height: 40px;
    background: white;
    border-radius: 0px 0px 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
  }
  .liked-spot-card__card-title {
    font-size: 14px;
    color: #333333;
    font-weight: 500;

    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
  }
  .liked-spot-card__card-like-wrapper {
    display: flex;
    align-items: center;
  }
  .liked-spot-card__card-heart-icon {
    width: 30px;
    height: 30px;
  }
  .liked-spot-card__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #000000;
    opacity: 0.7;
    border: 4px solid #AAAAAA;
    border-radius: 10px;
  }
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
  const showMask = false;
  const pics = foundSpotDetail.get('pic').map((pic) => ({
    original: pic,
    thumbnail: pic,
  })).toJS();

  return (
    <LikedSpotCardContainer>
      <div className="liked-spot-card__card-wrapper">
        <div className="liked-spot-card__card-cover">
          <ImageGallery
            items={pics}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            autoPlay
            slideInterval={getRandom(3000, 5000)}
          />
        </div>
        <div className="liked-spot-card__card-title-wrapper">
          <div className="liked-spot-card__card-title">{foundSpotDetail.get('name')}</div>
          <div className="liked-spot-card__card-like-wrapper">
            <img src={redHeartCircleIconPath} className="liked-spot-card__card-heart-icon" alt="" />
            <div>666</div>
          </div>
        </div>
      </div>
      {
        showMask &&
        <div className="liked-spot-card__mask">Mask</div>
      }
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
  spots: Map(),
  handleFetchSpotById: () => { },
};

export default LikedSpotCard;
