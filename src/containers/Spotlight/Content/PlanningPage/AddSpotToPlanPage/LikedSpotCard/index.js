import React, { useContext, useEffect, useCallback } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import Spinner from 'components/Spinner';
import ImageGallery from 'react-image-gallery';
import Context from 'containers/Spotlight/Context';

import redHeartCircleIconPath from 'assets/red_heart_circle_icon.svg';
import checkCircleIconPath from 'assets/check_circle_icon.svg';

const { SpotlightContext } = Context;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const HEIGHT_SPOT_CARD = 140;

const LikedSpotCardContainer = styled.div`
  width: 100%;
  height: ${HEIGHT_SPOT_CARD}px;
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
  .liked-spot-card__check-icon {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0px;
    margin: 5px;
  }
`;

const LikedSpotCard = ({
  spotId,
  spots,
  match,
  handleFetchSpotById,
}) => {
  const context = useContext(SpotlightContext);
  const {
    selectedLikedSpotId,
    setSelectedLikedSpotId,
  } = context;
  const foundSpotDetail = spots.get(String(spotId));
  const handleSelectLikedSpot = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setSelectedLikedSpotId({
      spotId,
      projectId: match.params.projectId,
      day: searchParams.get('day'),
      afterIndex: searchParams.get('afterIndex'),
      elapsedTime: '02:00',
    });
  }, []);
  useEffect(() => {
    if (!foundSpotDetail) {
      handleFetchSpotById(spotId);
    }
  }, []);
  if (!foundSpotDetail) {
    return <Spinner height={HEIGHT_SPOT_CARD} />;
  }
  let showMask = false;
  if (selectedLikedSpotId) {
    showMask = selectedLikedSpotId.spotId === spotId;
  }
  const pics = foundSpotDetail.get('pic').map((pic) => ({
    original: pic,
    thumbnail: pic,
  })).toJS();

  return (
    <LikedSpotCardContainer>
      <div role="presentation" className="liked-spot-card__card-wrapper" onClick={handleSelectLikedSpot}>
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
            <div>{foundSpotDetail.get('like_num')}</div>
          </div>
        </div>
      </div>
      {
        showMask &&
        <>
          <div className="liked-spot-card__mask" />
          <img className="liked-spot-card__check-icon" src={checkCircleIconPath} alt="" />
        </>
      }
    </LikedSpotCardContainer>
  );
};

LikedSpotCard.propTypes = {
  match: PropTypes.object,
  spotId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  spots: PropTypes.instanceOf(Map),
  handleFetchSpotById: PropTypes.func,
};

LikedSpotCard.defaultProps = {
  match: {},
  spots: Map(),
  handleFetchSpotById: () => { },
};

export default LikedSpotCard;
