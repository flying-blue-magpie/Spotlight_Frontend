import React from 'react';
import styled from 'styled-components';
import history from 'utils/history';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';

const Container = styled.div`
  margin-top: 10px;
  position: relative;
  cursor: pointer;
  .project-card__cover {
    background-image: url("https://www.telegraph.co.uk/content/dam/Travel/2017/May/taipei-night-market.jpg?imwidth=450");
    background-size: cover;
    height: 160px;
    width: 100%;
  }
  .project-card__body {
    background: white;
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0.9;
    padding: 8px 10px;
  }
  .project-card__body-title {
    font-size: 14px;
  }
  .project-card__body-content {
    font-size: 12px;
  }
`;

const ProjectCard = (props) => {
  const {
    title,
    id,
  } = props;
  const handleOnClick = () => {
    console.log('id: ', id);
    history.push({
      pathname: routePathConfig.editPlanningPagePath,
    });
  };
  return (
    <Container onClick={handleOnClick}>
      <div className="project-card__cover">
        <div className="project-card__body">
          <div className="project-card__body-title">{title}</div>
          <div className="project-card__body-content">2019年6月5日-2019年6月9日 / 4天</div>
        </div>
      </div>
    </Container>
  );
};

export default ProjectCard;