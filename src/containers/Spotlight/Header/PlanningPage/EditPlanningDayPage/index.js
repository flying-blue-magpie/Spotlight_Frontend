import React, { useCallback, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectOwnProjects,
} from 'containers/Spotlight/selectors';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import Modal from 'antd/lib/modal';

import { PAGE_NAME } from 'Styled/Settings/constants';
import timesIconPath from 'assets/times_icon.svg';
import checkIconPath from 'assets/check_icon.svg';
import trashIconPath from 'assets/trash_icon.svg';

const { confirm } = Modal;

const EditPlanningDayPage = (props) => {
  const {
    handleSubmitUpdateProject,
  } = props;
  const { SpotlightContext } = Context;
  const {
    setIsNavVisible,
    // updateProject,
    selectedDays,
    setSelectedDays,
    updateProject,
    setUpdateProject,
  } = useContext(SpotlightContext);
  const {
    match,
    // ownProjects,
  } = props;
  const { projectId } = match.params;
  const handleOnCancel = useCallback(() => {
    history.goBack();
  }, []);
  const handleOnDelete = useCallback(() => {
    const submitProject = updateProject
      .update('plan', (plan) => plan.filter((p, index) => !selectedDays.includes(index + 1)))
      .update('tot_days', (totDays) => totDays - selectedDays.size);
    confirm({
      title: '刪除',
      content: '確認是否刪除選取項目？',
      okText: '刪除',
      okType: 'danger',
      onOk: () => {
        handleSubmitUpdateProject(projectId, submitProject);
        setSelectedDays(List());
      },
    });
  }, [selectedDays, updateProject]);
  const handleOnCheck = useCallback(() => {
    handleSubmitUpdateProject(projectId, updateProject);
  }, [selectedDays, updateProject]);

  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
      setSelectedDays(List());
      setUpdateProject(Map());
    };
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <div role="presentation" onClick={handleOnCancel}>
          <img className="icon-style" src={timesIconPath} alt="" />
        </div>
      </div>
      <div>{PAGE_NAME.EDIT_PLANNING_DAY.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <div role="presentation" onClick={selectedDays.size ? handleOnDelete : handleOnCheck}>
          <img className="icon-style" src={selectedDays.size ? trashIconPath : checkIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

EditPlanningDayPage.propTypes = {
  // user: PropTypes.instanceOf(Map),
  match: PropTypes.object,
  // ownProjects: PropTypes.instanceOf(List).isRequired,
  handleSubmitUpdateProject: PropTypes.func,
};

EditPlanningDayPage.defaultProps = {
  // user: Map(),
  match: {},
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  // user: selectUser(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPlanningDayPage);
