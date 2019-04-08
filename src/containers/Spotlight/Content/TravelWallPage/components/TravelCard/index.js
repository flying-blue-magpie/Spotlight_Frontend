import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
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

const TravelCard = ({ projectId }) => {
  const imagePath = 'https://www.silverkris.com/wp-content/uploads/2017/08/taipei-ximending.jpg';
  const handleOnClick = useCallback(() => {
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING.name}`;
    const defaultDay = 1;
    history.push({
      pathname: `${detailPlanningPagePath}/${projectId}`,
      search: `?day=${defaultDay}`,
    });
  });

  const handleOnLikeClick = useCallback((event) => {
    event.stopPropagation();
  });

  return (
    <Container imagePath={imagePath} onClick={handleOnClick}>
      <Header>
        <UserImage className="fas fa-user-circle" />
        <HeaderInfo>
          <UserName>這裡是名字</UserName>
          <CardDate>1天前</CardDate>
        </HeaderInfo>
      </Header>
      <CardImage src={imagePath} />
      <Footer>
        <FooterInfo>
          <CardTitle>台北購物之旅</CardTitle>
          <CardSubtitle>2019年6月5日-2019年6月9日 / 4天</CardSubtitle>
        </FooterInfo>
        <Likes onClick={handleOnLikeClick} />
      </Footer>
    </Container>
  );
};

TravelCard.propTypes = {
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default TravelCard;
