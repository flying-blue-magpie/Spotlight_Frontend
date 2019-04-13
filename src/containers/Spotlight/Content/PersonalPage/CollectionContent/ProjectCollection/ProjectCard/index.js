import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { createStructuredSelector } from 'reselect';
import {
  selectUsers,
  selectProjects,
} from 'containers/Spotlight/selectors';
import {
  fetchUserById,
  fetchProjectById,
} from 'containers/Spotlight/actions';

import TravelCard from 'components/TravelCard';

/* eslint no-shadow: 0 */
const ProjectCard = ({
  users,
  projects,
  projectId,
  fetchUserById,
  fetchProjectById,
}) => {
  useEffect(() => {
    const project = projects.get(String(projectId));
    if (!project) {
      fetchProjectById(projectId);
    } else {
      const ownerId = project.get('owner');
      if (!users.get(ownerId)) {
        fetchUserById(ownerId);
      }
    }
  }, [users, projects]);

  const project = projects.get(String(projectId));

  if (!project) {
    return null;
  }

  const ownerId = project.get('owner');
  const user = users.get(ownerId);
  const userName = user && (user.get('name') || '在地專業嚮導');
  const imagePath = 'https://cw1.tw/CW/opinion/images/common/201801/opinion-5a618a5f20fb8.jpg';
  const faviconPath = user && (user.get('portrait_link') || 'https://img.ltn.com.tw/Upload/liveNews/BigPic/600_php7mZoYr.jpg');
  return (
    <TravelCard
      userName={userName}
      cardImageSrc={imagePath}
      userImageSrc={faviconPath}
      cardDate={project.get('created_time')}
      cardTitle={project.get('name')}
      likeNumber={project.get('like_num')}
      isLikeActive
      to={`${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}`}
    />
  );
};

ProjectCard.propTypes = {
  users: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  fetchUserById: PropTypes.func.isRequired,
  fetchProjectById: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  projects: selectProjects(),
});

export default connect(mapStateToProps, { fetchUserById, fetchProjectById })(ProjectCard);
