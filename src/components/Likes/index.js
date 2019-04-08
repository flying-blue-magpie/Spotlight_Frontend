import React from 'react';
import PropTypes from 'prop-types';

import { LikeLabel, LikeButton } from './Styled';

const Likes = ({
  className,
  onClick,
  isActive,
  likeNumber,
}) => (
  <LikeLabel className={className} onClick={onClick}>
    <LikeButton
      className={`${
        isActive
          ? 'fas fa-heart'
          : 'far fa-heart'
      }`}
    />
    {likeNumber}
  </LikeLabel>
);

Likes.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  likeNumber: PropTypes.number,
};

Likes.defaultProps = {
  isActive: false,
  likeNumber: 0,
};

export default Likes;
