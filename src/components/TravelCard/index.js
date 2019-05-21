import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'nuka-carousel';
import Modal from 'antd/lib/modal';
import Rate from 'antd/lib/rate';
import history from 'utils/history';
import Likes from 'components/Likes';
import peopleIconPath from 'assets/people_icon_100.svg';

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
  Review,
  FooterButtons,
  Comment,
  CommentIcon,
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
  onCardClick,
  userImageTo,
  cardImageSrcList,
  reviewScore,
  reviewCount,
  commentCount,
  commentTo,
}) => {
  const handleOnClick = useCallback(() => {
    history.push(to);
    onCardClick();
  });

  const handleOnLikeClick = useCallback((event) => {
    event.stopPropagation();
    onLikeClick();
  });

  const handleOnUserImageClick = useCallback((event) => {
    event.stopPropagation();
    history.push(userImageTo);
  });

  const handleOnReviewClick = useCallback((event) => {
    event.stopPropagation();
    Modal.confirm({
      title: '為這個旅程匿名評價',
      cancelText: '取消',
      okText: '確定',
      content: <Rate />,
      icon: null,
      okButtonProps: {
        style: {
          backgroundColor: '#FBE45A',
          color: '#292929',
          borderColor: '#FBE45A',
        },
      },
      cancelButtonProps: {
        style: {
          backgroundColor: '#EEEEEE',
          color: '#292929',
          borderColor: '#EEEEEE',
        },
      },
    });
  });

  const handleOnCommentClick = useCallback((event) => {
    event.stopPropagation();
    history.push(commentTo);
  });

  return (
    <Container onClick={handleOnClick} className={className}>
      <Header>
        <UserImage src={userImageSrc} onClick={handleOnUserImageClick} />
        <HeaderInfo>
          <UserName>{userName}</UserName>
          <CardDate>{cardDate}</CardDate>
        </HeaderInfo>
        <Review onClick={handleOnReviewClick}>
          {`${reviewScore} (${reviewCount})`}
        </Review>
      </Header>
      {(cardImageSrcList && cardImageSrcList.length > 0)
        ? (
          <Carousel
            autoplay={cardImageSrcList.length > 1}
            swiping={false}
            dragging={false}
            wrapAround
            withoutControls
            autoplayInterval={Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000}
            speed={450}
            pauseOnHover={false}
          >
            {cardImageSrcList.map((pic, index) => (
              <CardImage key={index} src={pic} />
            ))}
          </Carousel>
        )
        : <CardImage src={cardImageSrc} />
      }
      <Footer>
        <FooterInfo>
          <CardTitle>{cardTitle}</CardTitle>
          <CardSubtitle>{cardSubtitle}</CardSubtitle>
        </FooterInfo>
      </Footer>
      <FooterButtons>
        <Likes
          onClick={handleOnLikeClick}
          likeNumber={likeNumber}
          isActive={isLikeActive}
        />
        <Comment onClick={handleOnCommentClick}>
          <CommentIcon className="fas fa-comment-dots" />
          {commentCount}
        </Comment>
      </FooterButtons>
    </Container>
  );
};

TravelCard.propTypes = {
  className: PropTypes.string,
  cardImageSrc: PropTypes.string,
  cardImageSrcList: PropTypes.array,
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
  userImageTo: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
  reviewScore: PropTypes.number,
  reviewCount: PropTypes.number,
  commentCount: PropTypes.number,
  commentTo: PropTypes.string,
};

TravelCard.defaultProps = {
  cardImageSrc: 'https://www.silverkris.com/wp-content/uploads/2017/08/taipei-ximending.jpg',
  userImageSrc: peopleIconPath,
  userName: '使用者',
  cardDate: '????年??月??日',
  cardTitle: '卡片標題',
  cardSubtitle: '卡片副標題',
  onLikeClick: () => {},
  onCardClick: () => {},
  reviewScore: 0,
  reviewCount: 0,
  commentCount: 0,
};

export default TravelCard;
