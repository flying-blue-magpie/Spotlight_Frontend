import React, { useCallback, useEffect, useContext } from 'react';
// import PropTypes from 'prop-types';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
// import { List } from 'immutable';
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

import { PAGE_NAME } from 'Styled/Settings/constants';
import timesIconPath from 'assets/times_icon.svg';
import checkIconPath from 'assets/check_icon.svg';

const EditPlanningDayPage = () => {
  const { SpotlightContext } = Context;
  const {
    setIsNavVisible,
    // updateProject,
  } = useContext(SpotlightContext);
  // const {
  //   match,
  //   ownProjects,
  // } = props;
  const handleOnCancel = useCallback(() => {
    history.goBack();
  }, []);

  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
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
        <div role="presentation" onClick={() => {}}>
          <img className="icon-style" src={checkIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

EditPlanningDayPage.propTypes = {
  // user: PropTypes.instanceOf(Map),
  // match: PropTypes.object,
  // ownProjects: PropTypes.instanceOf(List).isRequired,
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
