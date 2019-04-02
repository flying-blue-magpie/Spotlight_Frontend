import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import styled from 'styled-components';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import moment from 'moment';
import Context from 'containers/Spotlight/Context';
import {
  findAttributeInEvent,
} from 'utils/event';
import Modal from 'antd/lib/modal';

const { confirm } = Modal;
const { SpotlightContext } = Context;

const Container = styled.div`
  background-image: url("https://www.telegraph.co.uk/content/dam/Travel/2017/May/taipei-night-market.jpg?imwidth=450");
  background-size: cover;

  height: 160px;
  margin-top: 10px;
  position: relative;
  cursor: ${(props) => (props.isEditMode ? '' : 'pointer')};
  .project-card__info-row-wrapper {
    background: white;
    opacity: 0.9;
    position: absolute;
    width: 100%;
    bottom: 0px;
    height: 50px;
  }
  .project-card__info-row {
    height: 100%;
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .project-card__info-title {
    font-size: 16px
  }
  .project-card__info-period {
    font-size: 12px
  }
  .project-card__mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.6;
  }
  .project-card__trash-icon-wrapper {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: white;
    position: absolute;
    right: 0;
    margin: 15px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  .project-card__trash-icon {
    color: #545454;
    font-size: 12px;
  }
`;

const ProjectCard = (props) => {
  const context = useContext(SpotlightContext);
  const {
    isEditMode,
  } = context;
  const {
    project,
  } = props;
  const projectId = project.get('proj_id');
  const name = project.get('name');
  const days = project.get('tot_days');
  const startDay = moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日');
  const endDay = moment(project.get('start_day'), 'YYYY-MM-DD').add(days - 1, 'days').format('YYYY年MM月DD日');
  const handleOnClick = useCallback(() => {
    if (isEditMode) {
      return;
    }
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING}`;
    const defaultDay = 1;
    history.push({
      pathname: `${detailPlanningPagePath}/${projectId}`,
      search: `?day=${defaultDay}`,
    });
  }, [projectId, isEditMode]);
  const handleOnDeleteProject = useCallback((event) => {
    const projId = findAttributeInEvent(event, 'data-project-id');
    confirm({
      title: '刪除旅程計畫',
      content: `確認是否刪除 "${name}" ？`,
      okText: '刪除',
      okType: 'danger',
      onOk: () => {
        console.log('delete project: ', projId);
      },
    });
  }, []);
  return (
    <Container isEditMode={isEditMode} onClick={handleOnClick}>
      <div role="presentation" className="project-card__info-row-wrapper">
        <div className="project-card__info-row">
          <div className="project-card__info-title">{name}</div>
          <div className="project-card__info-period">{`${startDay}-${endDay} / ${days}天`}</div>
        </div>
      </div>
      {
        isEditMode &&
        <>
          <div className="project-card__mask" />
          <div
            role="presentation"
            className="project-card__trash-icon-wrapper"
            data-project-id={projectId}
            onClick={handleOnDeleteProject}
          >
            <i className="fas fa-trash-alt project-card__trash-icon" />
          </div>
        </>
      }
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
