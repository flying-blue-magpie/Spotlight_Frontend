import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';

import arrowLeftIconPath from 'assets/arrow_left_icon.svg';
import checkIconPath from 'assets/check_icon.svg';

const { SpotlightContext } = Context;

const UpdatingSpotCardPage = (props) => {
  const context = useContext(SpotlightContext);
  const {
    updateProject,
  } = context;
  const {
    match,
    handleSubmitUpdateProject,
  } = props;
  const { projectId } = match.params;
  const { search } = window.location;
  const handleOnGoBack = useCallback(() => {
    history.goBack();
  }, []);
  const handleOnUpdateSpotCard = useCallback(() => {
    handleSubmitUpdateProject(projectId, updateProject);
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING.name}`;
    history.push({
      pathname: `${detailPlanningPagePath}/${projectId}`,
      search,
    });
  }, [projectId, updateProject]);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <div role="presentation" onClick={handleOnGoBack}>
          <img className="icon-style" src={arrowLeftIconPath} alt="" />
        </div>
      </div>
      <div>{PAGE_NAME.SETTING_SPOT_CARD.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <div role="presentation" onClick={handleOnUpdateSpotCard}>
          <img className="icon-style" src={checkIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

UpdatingSpotCardPage.propTypes = {
  match: PropTypes.object,
  handleSubmitUpdateProject: PropTypes.func,
};

UpdatingSpotCardPage.defaultProps = {
  match: {},
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatingSpotCardPage);
