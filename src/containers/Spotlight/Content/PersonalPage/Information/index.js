import React from 'react';
import Favicon from './Favicon';

const Information = () => (
  <div className="personal-page__info-wrapper">
    <Favicon />
    <div className="personal-page__profile-wrapper">
      <div className="personal-page__profile-name">這裡是名字</div>
      <div className="personal-page__profile-travel-info">
        <div className="
          personal-page__profile-travel-info-item-wrapper
          personal-page__profile-travel-info-item-divier
          personal-page__profile-travel-info-item-padding-right
        "
        >
          <div className="personal-page__profile-travel-info-item-title">旅程發表</div>
          <div className="personal-page__profile-travel-info-item-number">99</div>
        </div>
        <div className="
          personal-page__profile-travel-info-item-wrapper
          personal-page__profile-travel-info-item-divier
          personal-page__profile-travel-info-item-padding-right
          personal-page__profile-travel-info-item-padding-left
        "
        >
          <div className="personal-page__profile-travel-info-item-title">收藏數</div>
          <div className="personal-page__profile-travel-info-item-number">99</div>
        </div>
        <div className="
          personal-page__profile-travel-info-item-wrapper
          personal-page__profile-travel-info-item-padding-left
        "
        >
          <div className="personal-page__profile-travel-info-item-title">被收藏</div>
          <div className="personal-page__profile-travel-info-item-number">99</div>
        </div>
      </div>
    </div>
  </div>
);

export default Information;
