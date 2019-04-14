import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import { connect } from 'react-redux';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  selectProjects,
} from 'containers/Spotlight/selectors';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import Context from 'containers/Spotlight/Context';

import arrowLeftIconPath from 'assets/arrow_left_icon.svg';
import checkIconPath from 'assets/check_icon.svg';

const { SpotlightContext } = Context;

const SettingSpotCardPage = (props) => {
  const context = useContext(SpotlightContext);
  const {
    selectedLikedSpotId,
    setSelectedLikedSpotId,
  } = context;
  if (!selectedLikedSpotId) {
    return null;
  }
  const {
    day,
    afterIndex,
    elapsedTime,
    spotId,
  } = selectedLikedSpotId;
  const {
    project,
    handleSubmitUpdateProject,
  } = props;
  if (!project) {
    history.push(`/${PAGE_NAME.PLANNING.name}`);
    return null;
  }
  const plan = project.get('plan');
  const handleOnGoBack = useCallback(() => {
    history.goBack();
  }, []);

  const handleOnCheck = useCallback(() => {
    const time = elapsedTime.split(':');
    const during = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);
    const updatedPlan = plan.updateIn([parseInt(day, 10) - 1, 'arrange'], (arrange) => {
      const newSpotCard = fromJS({
        spot_id: parseInt(spotId, 10),
        during,
      });
      const insertIndex = parseInt(afterIndex, 10);
      const isIndexSmallThanSize = arrange.size >= insertIndex;

      // insert at positions between spots
      if (isIndexSmallThanSize) {
        return arrange.insert(insertIndex, newSpotCard);
      }

      // insert at last position
      return arrange.push(newSpotCard);
    });

    const result = fromJS({
      plan: updatedPlan.toJS(),
    });
    handleSubmitUpdateProject(project.get('proj_id'), result);
    setSelectedLikedSpotId(null);
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING.name}`;
    history.push({
      pathname: `${detailPlanningPagePath}/${project.get('proj_id')}`,
      search: `?day=${day}`,
    });
  });

  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <div role="presentation" onClick={handleOnGoBack}>
          <img className="icon-style" src={arrowLeftIconPath} alt="" />
        </div>
      </div>
      <div>{PAGE_NAME.SETTING_SPOT_CARD.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <div role="presentation" onClick={handleOnCheck}>
          <img className="icon-style" src={checkIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

SettingSpotCardPage.propTypes = {
  project: PropTypes.instanceOf(Map),
  handleSubmitUpdateProject: PropTypes.func,
};

SettingSpotCardPage.defaultProps = {
  project: Map(),
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProjects()(state).get(ownProps.match.params.projectId),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingSpotCardPage);
