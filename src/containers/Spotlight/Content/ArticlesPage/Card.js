import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardContainer = styled.div`
  box-shadow: 0px 3px 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
  .article-card__title {
    color: #333333;
    font-size: 16px;
    font-weight: 500;
  }
  .article-card__timestamp {
    font-size: 12px;
    color: #AAAAAA;
  }
  .article-card__content {
    font-size: 12px;
    color: #333333;
    margin: 5px 0px;
  }
  .article-card__images-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    grid-gap: 5px;
    width: 100%;
  }
  .article-card__image {
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.imagePath});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 100px;
  width: auto;
`;

const Card = ({
  title,
  content,
  timestamp,
  images,
}) => (
  <CardContainer>
    <div className="article-card__title">{title}</div>
    <div className="article-card__timestamp">{timestamp}</div>
    <div className="article-card__content">{content}</div>
    <div className="article-card__images-wrapper">
      {
        images.map((imagePath, index) => (
          <Image
            key={`${imagePath}-${index}`}
            imagePath={imagePath}
          />
        ))
      }
    </div>
  </CardContainer>
);

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  timestamp: PropTypes.string,
  images: PropTypes.array,
};

Card.defaultProps = {
  title: '',
  content: '',
  timestamp: '',
  images: [],
};

export default Card;
