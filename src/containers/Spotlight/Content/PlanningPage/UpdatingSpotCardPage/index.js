import React, {
  useContext, useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List, Map, fromJS } from 'immutable';
import Context from 'containers/Spotlight/Context';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'components/Modal';
import TimePicker from 'components/TimePicker';
import moment from 'moment';
import {
  selectIsModalVisible,
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import {
  setIsModalVisible,
  fetchOwnProjects,
} from 'containers/Spotlight/actions';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  height: '245px',
};

const { SpotlightContext } = Context;

const UpdatingSpotCardPageContainer = styled.div`
  padding: 15px;
`;

const TimePickerInput = styled.div`
  display: flex;
  background: rgba(238, 238, 238, 1);
  align-items: center;
  height: 40px;
  border-radius: 20px;
  padding: 0px 10px;
  .time-picker-input__label-box {
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
    letter-spacing: 1px;
    padding-left: 10px;
    padding-right: 20px;
  }
  .time-picker-input__input {
    font-size: 14px;
    padding: 0px 10px;
    flex-grow: 1;
    cursor: pointer;
  }
`;

const UpdatingSpotCardPage = (props) => {
  const [elapsedTime, setElapsedTime] = useState();
  const {
    match,
    location,
    isModalVisible,
    ownProjects,
    ownProjectsMeta,
    handleSetModalVisible,
    handleFetchOwnProjects,
  } = props;
  const {
    selectedSpotId,
  } = location.state;
  const context = useContext(SpotlightContext);
  const {
    setUpdateProject,
  } = context;

  const { projectId } = match.params;
  const isOwnProjectLoaded = ownProjectsMeta.get('isLoaded');
  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const handleShowModal = useCallback(() => {
    handleSetModalVisible(true);
  }, []);
  const handleHideModal = useCallback(() => {
    handleSetModalVisible(false);
  }, []);
  const handleOnPickerCheck = useCallback((value) => {
    if (!value) {
      return;
    }
    // set elapsedTime
    const time = value.split(':');
    setElapsedTime(`${time[0]}:${time[1]}`);

    // set updatedPlan
    const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
    const plan = ownProject.get('plan');
    const updatedPlan = plan.updateIn([day - 1, 'arrange'], (arrange) => arrange.map((arr) => {
      if (arr.get('spot_id') === selectedSpotId) {
        return arr.set('during', parseInt(time[0], 10) * 60 + parseInt(time[1], 10));
      }
      return arr;
    }));
    setUpdateProject(fromJS({
      plan: updatedPlan,
    }));

    // hide modal
    handleSetModalVisible(false);
  }, []);
  useEffect(() => {
    if (!selectedSpotId || !projectId || !ownProjects.size) {
      history.push(`/${PAGE_NAME.PLANNING.name}`);
      return;
    }
    if (!isOwnProjectLoaded) {
      handleFetchOwnProjects();
      return;
    }


    const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
    const plan = ownProject.get('plan');
    const arrange = plan.getIn([day - 1, 'arrange']);
    const during = arrange.find((arr) => arr.get('spot_id') === selectedSpotId).get('during');
    const hhmmTime = moment('00:00', 'HH:mm').add(during, 'minutes').format('HH:mm');
    setElapsedTime(hhmmTime);
  }, [selectedSpotId, projectId]);

  return (
    <UpdatingSpotCardPageContainer>
      <TimePickerInput>
        <div className="time-picker-input__label-box">停留時間</div>
        <div
          role="presentation"
          className="time-picker-input__input"
          onClick={handleShowModal}
        >
          {elapsedTime}
        </div>
        <Modal
          id="TimePicker"
          optionStyle={modalStyle}
          isVisible={isModalVisible}
          heightGrowing
        >
          <TimePicker
            startTime={elapsedTime}
            handleOnCancel={handleHideModal}
            handleOnOk={handleOnPickerCheck}
          />
        </Modal>
      </TimePickerInput>
    </UpdatingSpotCardPageContainer>
  );
};

UpdatingSpotCardPage.propTypes = {
  match: PropTypes.object,
  location: PropTypes.object,
  isModalVisible: PropTypes.bool,
  ownProjects: PropTypes.instanceOf(List),
  ownProjectsMeta: PropTypes.object,
  handleSetModalVisible: PropTypes.func,
  handleFetchOwnProjects: PropTypes.func,
};

UpdatingSpotCardPage.defaultProps = {
  match: {},
  location: {},
  isModalVisible: false,
  ownProjects: List(),
  ownProjectsMeta: Map(),
  handleSetModalVisible: () => { },
  handleFetchOwnProjects: () => { },
};

const mapStateToProps = createStructuredSelector({
  isModalVisible: selectIsModalVisible(),
  ownProjects: selectOwnProjects(),
  ownProjectsMeta: selectOwnProjectsMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetModalVisible: (isVisible) => dispatch(setIsModalVisible(isVisible)),
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatingSpotCardPage);
