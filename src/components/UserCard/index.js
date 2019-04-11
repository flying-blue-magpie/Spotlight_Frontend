import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  UserImage,
  UserInfo,
  UserName,
  Stats,
  Stat,
  StatName,
  StatNumber,
} from './Styled';

const UserCard = ({
  userName,
  userImage,
  publishedProjectsCount,
  collectedCount,
  projectsLikedCount,
}) => (
  <Container>
    <UserImage src={userImage} />
    <UserInfo>
      <UserName>{userName}</UserName>
      <Stats>
        <Stat>
          <StatName>旅程發表</StatName>
          <StatNumber>{publishedProjectsCount}</StatNumber>
        </Stat>
        <Stat>
          <StatName>收藏數</StatName>
          <StatNumber>{collectedCount}</StatNumber>
        </Stat>
        <Stat>
          <StatName>被收藏</StatName>
          <StatNumber>{projectsLikedCount}</StatNumber>
        </Stat>
      </Stats>
    </UserInfo>
  </Container>
);

UserCard.propTypes = {
  userName: PropTypes.string,
  userImage: PropTypes.string,
  publishedProjectsCount: PropTypes.number,
  collectedCount: PropTypes.number,
  projectsLikedCount: PropTypes.number,
};

UserCard.defaultProps = {
  userName: '使用者',
  userImage: 'http://i.imgur.com/EUAd2ht.jpg',
  publishedProjectsCount: 0,
  collectedCount: 0,
  projectsLikedCount: 0,
};

export default UserCard;
