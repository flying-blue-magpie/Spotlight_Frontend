import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { createStructuredSelector } from 'reselect';
import { selectProjects } from 'containers/Spotlight/selectors';
import {
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
  projects,
  projectId,
  fetchProjectById,
  handleOnClick,
}) => {
  useEffect(() => {
    if (!projects.get(projectId)) {
      fetchProjectById(projectId);
    }
  }, []);

  const project = projects.get(projectId);

  if (!project) {
    return null;
  }
  const imagePath = 'https://cw1.tw/CW/opinion/images/common/201801/opinion-5a618a5f20fb8.jpg';
  const faviconPath = 'https://img.ltn.com.tw/Upload/liveNews/BigPic/600_php7mZoYr.jpg';
  return (
    <StyledProjectCard
      imagePath={imagePath}
      data-id={projectId}
      data-redirect-path={PAGE_NAME.DETAIL_PLANNING}
      onClick={handleOnClick}
    >
      <div className="project-card__profile-wrapper">
        <img className="project-card__profile-favicon" src={faviconPath} alt="" />
        <div className="project-card__profile-name">這裡是名字</div>
      </div>
      <div className="project-card__title-wrapper">
        <span className="project-card__title">台北購物之旅</span>
      </div>
    </StyledProjectCard>
  );
};

ProjectCard.propTypes = {
  projects: PropTypes.object.isRequired,
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  fetchProjectById: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
});

export default connect(mapStateToProps, { fetchProjectById })(ProjectCard);
