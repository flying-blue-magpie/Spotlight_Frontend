import React from 'react';
import PropTypes from 'prop-types';
import { UserCard } from './Styled';

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
    <UserCard
      userName={user.get('name')}
      userImage={user.get('portrait_link') || undefined}
      publishedProjectsCount={publishedProjectsCount}
      collectedCount={collectedSpotsCount + collectedProjectsCount}
      projectsLikedCount={projectsLikedCount}
    />
  );
};

Information.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

export default Information;
