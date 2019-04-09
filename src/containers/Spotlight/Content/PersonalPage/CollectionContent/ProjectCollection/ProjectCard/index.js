import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

const StyledProjectCard = styled.div`
  height: 100px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  position: relative;
  cursor: pointer;
  .project-card__title-wrapper {
    position: absolute;
    bottom: 0;
    background: white;
    width: 100%;
    opacity: 0.7;
    display: flex;
    justify-content: center;
    padding: 5px 0px;
  }
  .project-card__title {
    font-size: 11px;
  }

  .project-card__profile-wrapper {
    display: flex;
    color: white;
    padding: 10px;
    .project-card__profile-favicon {
      height: 20px;
      width: 20px;
      background-image: url(${(props) => props.faviconPath});
      background-size: cover;
      border-radius: 100%;
    }
    .project-card__profile-name {
      color: white;
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

/* eslint no-shadow: 0 */
const ProjectCard = ({
  users,
  projects,
  projectId,
  fetchUserById,
  fetchProjectById,
  handleOnClick,
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
  const faviconPath = user && (user.get('protrait') || 'https://img.ltn.com.tw/Upload/liveNews/BigPic/600_php7mZoYr.jpg');
  return (
    <StyledProjectCard
      imagePath={imagePath}
      data-id={projectId}
      data-redirect-path={PAGE_NAME.DETAIL_PLANNING}
      onClick={handleOnClick}
    >
      <div className="project-card__profile-wrapper">
        <img className="project-card__profile-favicon" src={faviconPath} alt="" />
        <div className="project-card__profile-name">{userName}</div>
      </div>
      <div className="project-card__title-wrapper">
        <span className="project-card__title">{project.get('name')}</span>
      </div>
    </StyledProjectCard>
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
  handleOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  projects: selectProjects(),
});

export default connect(mapStateToProps, { fetchUserById, fetchProjectById })(ProjectCard);
