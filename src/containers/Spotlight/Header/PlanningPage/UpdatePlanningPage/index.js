import React, { useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import Context from 'containers/Spotlight/Context';

const { SpotlightContext } = Context;

const UpdatePlanningPage = (props) => {
  const context = useContext(SpotlightContext);
  const {
    setIsNavVisible,
    setUpdateProject,
    updateProject,
  } = context;
  const {
    handleSubmitUpdateProject,
  } = props;
  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
    };
  }, []);
  const handleGoBackToDetailPlanning = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;
    history.replace({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  const handleOnCheckBtn = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;

    handleSubmitUpdateProject(projectId, updateProject);
    setUpdateProject(Map());

    history.replace({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}`,
      search: `?day=${day}`,
    });
  }, [updateProject]);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i
          role="presentation"
          className="fas fa-times icon-style"
          onClick={handleGoBackToDetailPlanning}
        />
      </div>
      <div>{PAGE_NAME.UPDATE_PLANNING.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i
          role="presentation"
          className="fas fa-check icon-style"
          onClick={handleOnCheckBtn}
        />
      </div>
    </HeaderContainer>
  );
};

UpdatePlanningPage.propTypes = {
  match: PropTypes.object,
  handleSubmitUpdateProject: PropTypes.func,
};

UpdatePlanningPage.defaultProps = {
  match: {},
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlanningPage);
