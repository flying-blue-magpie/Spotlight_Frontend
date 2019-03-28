import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';

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
  const handleOnClick = useCallback(() => {
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING}`;
    const defaultDay = 1;
    history.push({
      pathname: `${detailPlanningPagePath}/${id}`,
      search: `?day=${defaultDay}`,
    });
  }, [id]);
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

ProjectCard.propTypes = {
  title: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ProjectCard.defaultProps = {
  title: '',
  id: '',
};

export default ProjectCard;
