import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectOwnProjects,
} from 'containers/Spotlight/selectors';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import history from 'utils/history';

import { PAGE_NAME } from 'Styled/Settings/constants';

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
`;

const EditPlanningDayPage = (props) => {
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
  const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
  if (!ownProject) {
    return <div>找不到該旅行計劃資料</div>;
  }
  const plan = ownProject.get('plan');

  return (
    <EditPlanningDayContainer>
      {
        plan.map((dayPlan, index) => (
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
