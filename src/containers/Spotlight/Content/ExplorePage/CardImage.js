import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import Carousel from 'nuka-carousel';
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
    <Carousel
      autoplay
      swiping={false}
      dragging={false}
      wrapAround
      withoutControls
      autoplayInterval={3000}
      speed={450}
      pauseOnHover={false}
    >
      {pics.map((pic, index) => (
        <StyledCardImage key={index} src={pic} />
      ))}
    </Carousel>
  );
};

CardImage.propTypes = {
  pics: PropTypes.instanceOf(List),
};

export default CardImage;
