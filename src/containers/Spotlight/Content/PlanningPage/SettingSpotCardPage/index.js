import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Modal from 'components/Modal';
import TimePicker from 'components/TimePicker';
import {
  selectIsModalVisible,
} from 'containers/Spotlight/selectors';
import {
  setIsModalVisible,
} from 'containers/Spotlight/actions';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  height: '245px',
};

const { SpotlightContext } = Context;

const SettingSpotCardPageContainer = styled.div`
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

const SettingSpotCardPage = (props) => {
  const {
    isModalVisible,
    handleSetModalVisible,
  } = props;
  const context = useContext(SpotlightContext);
  const {
    selectedLikedSpotId,
    setSelectedLikedSpotId,
  } = context;
  if (!selectedLikedSpotId) {
    history.push(`/${PAGE_NAME.PLANNING.name}`);
    return null;
  }
  const {
    elapsedTime,
  } = selectedLikedSpotId;
  const handleShowModal = useCallback(() => {
    handleSetModalVisible(true);
  }, []);
  const handleHideModal = useCallback(() => {
    handleSetModalVisible(false);
  }, []);
  const handleOnPickerCheck = useCallback((value) => {
    const time = value.split(':');
    setSelectedLikedSpotId((spot) => ({
      ...spot,
      elapsedTime: `${time[0]}:${time[1]}`,
    }));
    handleSetModalVisible(false);
  }, []);
  return (
    <SettingSpotCardPageContainer>
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
    </SettingSpotCardPageContainer>
  );
};

SettingSpotCardPage.propTypes = {
  isModalVisible: PropTypes.bool,
  handleSetModalVisible: PropTypes.func,
};

SettingSpotCardPage.defaultProps = {
  isModalVisible: false,
  handleSetModalVisible: () => { },
};

const mapStateToProps = createStructuredSelector({
  isModalVisible: selectIsModalVisible(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSetModalVisible: (isVisible) => dispatch(setIsModalVisible(isVisible)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingSpotCardPage);
