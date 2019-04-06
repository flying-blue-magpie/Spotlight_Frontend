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
import trashIconPath from 'assets/trash_icon.svg';

const { confirm } = Modal;
const { SpotlightContext } = Context;

const Container = styled.div`
  margin-top: 15px;
  box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16);
  border-radius: 10px;
  position: relative;
  .project-card__cover-image {
    background-image: url("https://icrvb3jy.xinmedia.com/solomo/article/139141/7A21D0A7-AEA1-D18D-C305-9A5930D37D27.jpeg");
    background-size: cover;
    height: 150px;
    border-radius: 10px 10px 0px 0px;
  }
  .project-card__info-row {
    height: 100%;
    padding: 0px 15px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .project-card__info-title {
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
    font-size: 16px;
  }
  .project-card__info-period {
    font-size: 12px;
    color: rgba(170, 170, 170, 1);
  }

  .project-card__mask {
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    opacity: 0.7;
    z-index: 1;
    border-radius: 10px;
  }
  .project-card__trash-icon-wrapper {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: white;
    position: absolute;
    right: 0;
    margin: 15px;
    cursor: pointer;
    z-index: 1;
    &:hover {
      opacity: 0.8;
    }
  }
  .project-card__trash-icon {
    color: #545454;
    font-size: 12px;
    width: 14px;
    height: 14px;
  }
`;

const ProjectCard = (props) => {
  const context = useContext(SpotlightContext);
  const {
    isEditMode,
  } = context;
  const {
    project,
    handleDeleteProject,
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
        handleDeleteProject(projId);
      },
    });
  }, []);
  return (
    <Container isEditMode={isEditMode} onClick={handleOnClick}>
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
            <img className="project-card__trash-icon" src={trashIconPath} alt="" />
          </div>
        </>
      }
      <div className="project-card__cover-image" />
      <div className="project-card__info-row">
        <div className="project-card__info-title">{name}</div>
        <div className="project-card__info-period">{`${startDay}-${endDay} / ${days}天`}</div>
      </div>
    </Container>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.instanceOf(Map),
  handleDeleteProject: PropTypes.func,
};

ProjectCard.defaultProps = {
  project: Map(),
  handleDeleteProject: () => { },
};

export default ProjectCard;
