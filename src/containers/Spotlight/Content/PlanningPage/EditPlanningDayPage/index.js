import React, { useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, Map, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectOwnProjects,
} from 'containers/Spotlight/selectors';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import history from 'utils/history';
// import Modal from 'antd/lib/modal';
import Context from 'containers/Spotlight/Context';

import { PAGE_NAME } from 'Styled/Settings/constants';
import { DEFAULT_PLAN } from 'containers/Spotlight/constants';
import plusIconPath from 'assets/plus_icon.svg';

// const { confirm } = Modal;

const EditPlanningDayContainer = styled.div`
  padding: 4px 15px;
  font-size: 14px;
  .edit-planning-day__row {
    border-bottom: 2px solid #EEEEEE;
    line-height: 40px;
    cursor: pointer;
    &:hover {
      background: #EEEEEE;
    }
  }
  .edit-planning-day__add-btn-wrapper {
    display: flex;
    align-items: center;
    font-weight: 500;
  }
  .edit-planning-day__add-icon {
    height: 18px;
    width: 18px;
    margin-right: 6px;
  }
`;

const EditPlanningDayPage = (props) => {
  const { SpotlightContext } = Context;
  const {
    updateProject,
    setUpdateProject,
  } = useContext(SpotlightContext);
  const {
    match,
    ownProjects,
  } = props;
  const {
    params: {
      projectId,
    },
  } = match;
  if (!ownProjects.size) {
    history.push(`/${PAGE_NAME.PLANNING.name}`);
    return null;
  }
  const handleOnDayRowClick = useCallback(() => {
    console.log('day');
  }, []);
  const handleAddDay = useCallback(() => {
    setUpdateProject((proj) => fromJS({
      plan: proj.get('plan').push(fromJS(DEFAULT_PLAN)),
      tot_days: proj.get('tot_days') + 1,
    }));
  }, []);
  const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
  if (!ownProject) {
    return <div>找不到該旅行計劃資料</div>;
  }
  const plan = ownProject.get('plan');
  useEffect(() => {
    setUpdateProject(Map({
      plan,
      tot_days: ownProject.get('tot_days'),
    }));
  }, [plan]);
  if (!updateProject.size) {
    return null;
  }

  return (
    <EditPlanningDayContainer>
      {
        updateProject.get('plan').map((dayPlan, index) => (
          <div
            role="presentation"
            key={`${dayPlan}-${index}`}
            className="edit-planning-day__row"
            onClick={handleOnDayRowClick}
          >
            <span>{`第${index + 1}天`}</span>
          </div>
        ))
      }
      <div
        role="presentation"
        className="edit-planning-day__row"
        onClick={handleAddDay}
      >
        <div className="edit-planning-day__add-btn-wrapper">
          <img className="edit-planning-day__add-icon" src={plusIconPath} alt="" />
          <span>增加天數</span>
        </div>
      </div>
    </EditPlanningDayContainer>
  );
};

EditPlanningDayPage.propTypes = {
  // user: PropTypes.instanceOf(Map),
  match: PropTypes.object,
  ownProjects: PropTypes.instanceOf(List).isRequired,
  // handleSubmitUpdateProject: PropTypes.func,
};

EditPlanningDayPage.defaultProps = {
  // user: Map(),
  match: {},
  // handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  // user: selectUser(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlanningDayPage);
