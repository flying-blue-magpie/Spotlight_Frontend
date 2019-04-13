import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import { findAttributeInEvent } from 'utils/event';
import history from 'utils/history';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';
import {
  selectUser,
  selectUsers,
  selectLoginStatusMeta,
  selectFavoriteSpotIdsMeta,
  selectFavoriteProjectIdsMeta,
} from 'containers/Spotlight/selectors';
import {
  fetchUserStats,
  fetchFavoriteSpotIds,
  fetchFavoriteProjectIds,
} from 'containers/Spotlight/actions';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Information from './Information';
import CollectionTabs from './CollectionTabs';
import CollectionContent from './CollectionContent';
import coverImagePath from './header-image.png';

const StyledPersonalPage = styled.div`
  height: 100%;
  .personal-page__cover-container {
    height: 200px;
    background-image: url(${(props) => props.coverImagePath});
    background-size: cover;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 20px 15px;
  }

  .personal-page__collection-group {
    display: flex;
    background: #EEEEEE;
    height: 40px;
    .personal-page__collection-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;;
      font-size: 14px;
      color: #333333;
      font-weight: bold;
      cursor: pointer;
    }
    .personal-page__collection-tab--active {
      background: #F9D94A;
    }
  }
`;

/* eslint no-shadow: 0 */
const PersonalPage = ({
  user,
  users,
  loginStatusMeta,
  favoriteSpotIdsMeta,
  favoriteProjectIdsMeta,
  fetchFavoriteSpotIds,
  fetchFavoriteProjectIds,
  fetchUserStats,
}) => {
  const [activeCollectionType, setActiveCollectionType] = useState('spot');
  const faviconPath = (user && user.get('portrait_link')) || 'http://i.imgur.com/EUAd2ht.jpg';
  const faviconSize = 70;
  const handleOnTabClick = (event) => {
    const type = findAttributeInEvent(event, 'data-collection-type');
    setActiveCollectionType(type);
    const personalPagePath = `/${PAGE_NAME.PERSONAL_PAGE.name}`;
    history.push({
      pathname: personalPagePath,
      search: `?collectionType=${type}`,
    });
  };
  const isAnonymous = loginStatusMeta.get('isLoaded') && !user;
  if (!loginStatusMeta.get('isLoaded')) {
    return null;
  }
  if (isAnonymous) {
    return <Redirect to={routePathConfig.login} />;
  }

  useEffect(() => {
    if (!favoriteSpotIdsMeta.get('isLoading')) {
      fetchFavoriteSpotIds();
    }
    if (!favoriteProjectIdsMeta.get('isLoading')) {
      fetchFavoriteProjectIds();
    }
    if (user) {
      const userId = user.get('user_id');
      if (userId) {
        fetchUserStats(userId);
      }
    }
  }, [users]);

  return (
    <StyledPersonalPage
      coverImagePath={coverImagePath}
      faviconPath={faviconPath}
      faviconSize={faviconSize}
    >
      <div className="personal-page__cover-container">
        <Information
          user={user}
          users={users}
        />
      </div>
      <CollectionTabs
        handleOnClick={handleOnTabClick}
      />
      <CollectionContent activeCollectionType={activeCollectionType} />
    </StyledPersonalPage>
  );
};

PersonalPage.propTypes = {
  user: PropTypes.instanceOf(Map),
  users: PropTypes.instanceOf(Map),
  loginStatusMeta: PropTypes.instanceOf(Map),
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
  favoriteProjectIdsMeta: PropTypes.instanceOf(Map).isRequired,
  fetchFavoriteSpotIds: PropTypes.func.isRequired,
  fetchFavoriteProjectIds: PropTypes.func.isRequired,
  fetchUserStats: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  users: selectUsers(),
  loginStatusMeta: selectLoginStatusMeta(),
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
  favoriteProjectIdsMeta: selectFavoriteProjectIdsMeta(),
});

export default connect(mapStateToProps, { fetchFavoriteSpotIds, fetchFavoriteProjectIds, fetchUserStats })(PersonalPage);
