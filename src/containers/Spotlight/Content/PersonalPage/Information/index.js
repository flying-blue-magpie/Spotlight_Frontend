import React from 'react';
import PropTypes from 'prop-types';
import Favicon from './Favicon';

const Information = ({
  user,
  users,
}) => {
  const userId = user.get('user_id');
  const collectedProjectsCount = (users && users.getIn([userId, 'stats', 'collected_projs_count'])) || 0;
  const collectedSpotsCount = (users && users.getIn([userId, 'stats', 'collected_spots_count'])) || 0;
  const projectsLikedCount = (users && users.getIn([userId, 'stats', 'projs_liked_count'])) || 0;
  const publishedProjectsCount = (users && users.getIn([userId, 'stats', 'published_projs_count'])) || 0;

  return (
    <div className="personal-page__info-wrapper">
      <Favicon user={user} />
      <div className="personal-page__profile-wrapper">
        <div className="personal-page__profile-name">{user.get('name')}</div>
        <div className="personal-page__profile-travel-info">
          <div className="
            personal-page__profile-travel-info-item-wrapper
            personal-page__profile-travel-info-item-divier
            personal-page__profile-travel-info-item-padding-right
          "
          >
            <div className="personal-page__profile-travel-info-item-title">旅程發表</div>
            <div className="personal-page__profile-travel-info-item-number">{publishedProjectsCount}</div>
          </div>
          <div className="
            personal-page__profile-travel-info-item-wrapper
            personal-page__profile-travel-info-item-divier
            personal-page__profile-travel-info-item-padding-right
            personal-page__profile-travel-info-item-padding-left
          "
          >
            <div className="personal-page__profile-travel-info-item-title">收藏數</div>
            <div className="personal-page__profile-travel-info-item-number">{collectedSpotsCount + collectedProjectsCount}</div>
          </div>
          <div className="
            personal-page__profile-travel-info-item-wrapper
            personal-page__profile-travel-info-item-padding-left
          "
          >
            <div className="personal-page__profile-travel-info-item-title">被收藏</div>
            <div className="personal-page__profile-travel-info-item-number">{projectsLikedCount}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Information.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

export default Information;
