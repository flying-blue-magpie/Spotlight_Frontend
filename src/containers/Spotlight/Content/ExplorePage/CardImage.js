import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ImageGallery from 'react-image-gallery';
import { CardImage as StyledCardImage } from './Styled';
import emptySpotImage from './empty-spot.png';

const CardImage = ({ pics }) => {
  if (!pics || pics.size === 0) {
    return <StyledCardImage src={emptySpotImage} />;
  }

  if (pics.size < 3) {
    return <StyledCardImage src={pics.get(0)} />;
  }

  return (
    <ImageGallery
      items={pics.map((pic) => ({ original: pic })).toJS()}
      renderItem={(items) => <StyledCardImage src={items.original} />}
      showThumbnails={false}
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      autoPlay
      slideInterval={3000}
      disableSwipe
    />
  );
};

CardImage.propTypes = {
  pics: PropTypes.instanceOf(List),
};

export default CardImage;
