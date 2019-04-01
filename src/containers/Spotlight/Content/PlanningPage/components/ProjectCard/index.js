import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import moment from 'moment';

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
  .project-card__body-name {
    font-size: 14px;
  }
  .project-card__body-content {
    font-size: 12px;
  }
`;

const ProjectCard = (props) => {
  const {
    project,
  } = props;
  const id = project.get('proj_id');
  const name = project.get('name');
  const days = project.get('tot_days');
  const startDay = moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日');
  const endDay = moment(project.get('start_day'), 'YYYY-MM-DD').add(days - 1, 'days').format('YYYY年MM月DD日');
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
          <div className="project-card__body-name">{name}</div>
          <div className="project-card__body-content">{`${startDay}-${endDay} / ${days}天`}</div>
        </div>
      </div>
    </Container>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Map),
};

ProjectCard.defaultProps = {
  project: Map(),
};

export default ProjectCard;
