import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import Likes from 'components/Likes';
import {
  Container,
  Header,
  UserImage,
  HeaderInfo,
  UserName,
  CardDate,
  CardImage,
  CardTitle,
  CardSubtitle,
  Footer,
  FooterInfo,
} from './Styled';

const TravelCard = ({
  className,
  cardImageSrc,
  userImageSrc,
  to,
  userName,
  cardDate,
  cardTitle,
  cardSubtitle,
  likeNumber,
  isLikeActive,
  onLikeClick,
}) => {
  const handleOnClick = useCallback(() => {
    history.push(to);
  });

  const handleOnLikeClick = useCallback((event) => {
    event.stopPropagation();
    onLikeClick();
  });

  return (
    <Container onClick={handleOnClick} className={className}>
      <Header>
        <UserImage src={userImageSrc} />
        <HeaderInfo>
          <UserName>{userName}</UserName>
          <CardDate>{cardDate}</CardDate>
        </HeaderInfo>
      </Header>
      <CardImage src={cardImageSrc} />
      <Footer>
        <FooterInfo>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
        </FooterInfo>
        <Likes
          onClick={handleOnLikeClick}
          likeNumber={likeNumber}
          isActive={isLikeActive}
        />
      </Footer>
    </Container>
  );
};

TravelCard.propTypes = {
  className: PropTypes.string,
  cardImageSrc: PropTypes.string,
  to: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  userImageSrc: PropTypes.string,
  userName: PropTypes.string,
  cardDate: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  likeNumber: PropTypes.number,
  isLikeActive: PropTypes.bool,
  onLikeClick: PropTypes.func,
  onCardClick: PropTypes.func,
};

TravelCard.defaultProps = {
  cardImageSrc: 'https://www.silverkris.com/wp-content/uploads/2017/08/taipei-ximending.jpg',
  userImageSrc: 'http://i.imgur.com/EUAd2ht.jpg',
  userName: '使用者',
  cardDate: '????年??月??日',
  cardTitle: '卡片標題',
  cardSubtitle: '卡片副標題',
  onLikeClick: () => {},
  onCardClick: () => {},
};

export default TravelCard;
