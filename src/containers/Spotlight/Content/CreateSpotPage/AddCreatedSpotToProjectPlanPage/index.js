import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import Modal from 'components/Modal';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  submitUpdateProject,
  fetchOwnProjects,
} from 'containers/Spotlight/actions';
import {
  selectProjects,
  selectCreateSpotMeta,
  selectCreatedSpotId,
} from 'containers/Spotlight/selectors';
import message from 'antd/lib/message';

import Header from './Header';
import Content from './Content';

const modalStyle = {
  height: '100%',
  width: '100%',
  background: 'white',
};


const AddCreatedSpotToProjectPlanPage = ({
  match,
  location,
  isVisible,
  setIsVisible,
  projects,
  createSpotMeta,
  createdSpotId,
  handleFetchOwnProjects,
  handleSubmitUpdateProject,
}) => {
  const isLoaded = createSpotMeta.get('isLoaded');
  const isLoading = createSpotMeta.get('isLoading');
  const [duringTime, setDurintTime] = useState(120);
  const { projectId } = match.params;
  useEffect(() => {
    if (!projects.get(projectId.toString())) {
      handleFetchOwnProjects();
    }
  }, []);
  const handleGoBack = useCallback(() => {
    setIsVisible(false);
  }, []);
  const handleCheck = useCallback(() => {
    if (duringTime <= 0) {
      message.error('時間格式錯誤');
    }
    const { afterIndex } = location.state;
    const searchParams = new URLSearchParams(location.search);
    const day = parseInt(searchParams.get('day'), 10);
    const plan = projects.getIn([projectId.toString(), 'plan']);
    const updatedPlan = plan.updateIn([day - 1, 'arrange'], (arrange) => {
      const createdSpot = fromJS({
        spot_id: createdSpotId,
        during: duringTime,
      });
      return arrange.insert(parseInt(afterIndex, 10), createdSpot);
    });
    handleSubmitUpdateProject(projectId, fromJS({
      plan: updatedPlan,
    }));
    setIsVisible(false);
    history.push({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}`,
      search: location.search,
    });
  }, [match, location, projects, duringTime, createdSpotId]);

  return (
    <Modal
      id="AddCreatedSpotToProjectPlanPage"
      optionStyle={modalStyle}
      isVisible={isVisible}
    >
      <Header
        handleGoBack={handleGoBack}
        handleCheck={handleCheck}
        isLoaded={isLoaded}
      />
      <Content
        duringTime={duringTime}
        setDurintTime={setDurintTime}
        setIsVisible={setIsVisible}
        isLoading={isLoading}
      />
    </Modal>
  );
};

AddCreatedSpotToProjectPlanPage.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  isVisible: PropTypes.bool,
  projects: PropTypes.instanceOf(Map),
  createSpotMeta: PropTypes.instanceOf(Map),
  createdSpotId: PropTypes.number,
  setIsVisible: PropTypes.func,
  handleFetchOwnProjects: PropTypes.func,
  handleSubmitUpdateProject: PropTypes.func,
};


const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
  createSpotMeta: selectCreateSpotMeta(),
  createdSpotId: selectCreatedSpotId(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCreatedSpotToProjectPlanPage);
