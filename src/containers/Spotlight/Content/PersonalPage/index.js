import React, { useState } from 'react';
import styled from 'styled-components';
import { findAttributeInEvent } from 'utils/event';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Information from './Information';
import CollectionTabs from './CollectionTabs';
import CollectionContent from './CollectionContent';

const StyledPersonalPage = styled.div`
  .personal-page__cover-image {
    height: 120px;
    background-image: url(${(props) => props.coverImagePath});
    background-size: cover;
  }
  .personal-page__info-wrapper {
    display: flex;
    position: relative;
    padding: 0px 20px;
    .personal-page__favicon-wrapper {
      width: 150px;
    }
    .personal-page__favicon {
      border-radius: 100%;
      border: 3px solid white;
      background-image: url(${(props) => props.faviconPath});
      background-size: cover;
      height: ${(props) => props.faviconSize}px;
      width: ${(props) => props.faviconSize}px;
      position: absolute;
      top: -30px;
    }
    .personal-page__profile-wrapper {
      padding: 10px 10px;
      width: 100%;
      .personal-page__profile-name {
        font-size: 16px;
        color: #707070;
        margin-bottom: 10px;
      }
      .personal-page__profile-travel-info {
        display: flex;
        .personal-page__profile-travel-info-item-wrapper {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .personal-page__profile-travel-info-item-title {
            font-size: 12px;
            color: #707070;
            margin-bottom: 3px;
          }
          .personal-page__profile-travel-info-item-number {
            font-size: 12px;
            color: #707070;
          }
        }
        .personal-page__profile-travel-info-item-divier {
          border-right: 1px solid #D1D1D1;
        }
        .personal-page__profile-travel-info-item-padding-right {
          padding-right: 20px;
        }
        .personal-page__profile-travel-info-item-padding-left {
          padding-left: 20px;
        }
      }
    }
  }

  .personal-page__collection-group {
    display: flex;
    background: #D1D1D1;
    height: 40px;
    .personal-page__collection-tab {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 50%;;
      font-size: 14px;
      color: #707070;
      cursor: pointer;
    }
    .personal-page__collection-tab--active {
      background: #B7B7B7;
    }
  }
`;

const PersonalPage = () => {
  const [activeCollectionType, setActiveCollectionType] = useState('spot');
  const faviconPath = 'http://i.imgur.com/EUAd2ht.jpg';
  const faviconSize = 90;
  const coverImagePath = 'http://cdn01.dcfever.com/media/travel/poi/2016/02/10963_poi_banner.jpg';
  const handleOnTabClick = (event) => {
    const type = findAttributeInEvent(event, 'data-collection-type');
    setActiveCollectionType(type);
    const personalPagePath = `/${PAGE_NAME.PERSONAL_PAGE}`;
    history.push({
      pathname: personalPagePath,
      search: `?collectionType=${type}`,
    });
  };
  return (
    <StyledPersonalPage
      coverImagePath={coverImagePath}
      faviconPath={faviconPath}
      faviconSize={faviconSize}
    >
      <div className="personal-page__cover-image" />
      <Information />
      <CollectionTabs
        handleOnClick={handleOnTabClick}
      />
      <CollectionContent activeCollectionType={activeCollectionType} />
    </StyledPersonalPage>
  );
};

export default PersonalPage;
