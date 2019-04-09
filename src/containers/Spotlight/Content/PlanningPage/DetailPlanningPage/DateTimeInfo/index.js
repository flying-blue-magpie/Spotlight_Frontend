import React, { useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';
import Modal from 'components/Modal';
import TimePicker from 'components/TimePicker';
import {
  WEEKDAYS_SHORT,
} from 'containers/Spotlight/constants';
import {
  selectIsModalVisible,
} from 'containers/Spotlight/selectors';
import {
  setIsModalVisible,
  submitUpdateProject,
} from 'containers/Spotlight/actions';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  height: '245px',
};

const StyledDateTimeInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 15px;
  justify-content: space-between;
  margin-top: 30px;
  .date-time-info__date-text {
    color: rgba(51, 51, 51, 1);
    font-family: 'Segoe UI';
    font-weight: 500;
    font-size: 16px;
  }
  .date-time-info__start-time-wrapper {
    display: flex;
    align-items: center;
    line-height: 20px;
    background: rgba(51, 51, 51, 1);
    color: white;
    padding: 6px 8px;
    border-radius: 16px;
    cursor: pointer;
    &:hover {
      background: rgba(51, 51, 51, 0.8);
    }
  }
  .date-time-info__clock-icon {
    margin-right: 5px;
    color: ${(props) => props.theme.mainColor};
  }
`;

const DateTimeInfo = (props) => {
  const {
    match,
    startDay,
    plan,
    isModalVisible,
    handleSetModalVisible,
    handleSubmitUpdateProject,
  } = props;
  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const date = moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').format('YYYY年MM月DD日');
  const weekday = WEEKDAYS_SHORT[moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').get('weekday')];
  const startTime = moment(plan.getIn([day - 1, 'start_time']), 'HH:mm').format('HH:mm');
  const handleShowModal = useCallback(() => {
    handleSetModalVisible(true);
  }, []);
  const handleHideModal = useCallback(() => {
    handleSetModalVisible(false);
  }, []);
  const handleOnPickerCheck = useCallback((value) => {
    const { projectId } = match.params;
    const updatedPlan = plan.setIn([day - 1, 'start_time'], value);
    const updatedProject = fromJS({
      plan: updatedPlan,
    });
    handleSubmitUpdateProject(projectId, updatedProject);
  }, []);

  return (
    <>
      <StyledDateTimeInfo>
        <div className="date-time-info__date-text">{`${date} ${weekday}`}</div>
        <div role="presentation" className="date-time-info__start-time-wrapper" onClick={handleShowModal}>
          <i className="far fa-clock date-time-info__clock-icon" />
          <span>{`出發時間 ${startTime}`}</span>
        </div>
      </StyledDateTimeInfo>
      <Modal
        id="TimePicker"
        optionStyle={modalStyle}
        isVisible={isModalVisible}
        heightGrowing
      >
        <TimePicker
          startTime={startTime}
          handleOnCancel={handleHideModal}
          handleOnOk={handleOnPickerCheck}
        />
      </Modal>
    </>
  );
};

DateTimeInfo.propTypes = {
  match: PropTypes.object,
  startDay: PropTypes.string,
  isModalVisible: PropTypes.bool,
  plan: PropTypes.instanceOf(List),
  handleSetModalVisible: PropTypes.func,
  handleSubmitUpdateProject: PropTypes.func,
};

DateTimeInfo.defaultProps = {
  match: {},
  startDay: '',
  isModalVisible: false,
  plan: List(),
  handleSetModalVisible: () => { },
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  isModalVisible: selectIsModalVisible(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetModalVisible: (isVisible) => dispatch(setIsModalVisible(isVisible)),
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateTimeInfo);
