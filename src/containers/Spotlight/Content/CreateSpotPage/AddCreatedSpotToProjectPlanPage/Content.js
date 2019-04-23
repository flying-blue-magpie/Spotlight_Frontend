import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InputBox from 'components/InputBox';
import Modal from 'components/Modal';
import TimePicker from 'components/TimePicker';
import Spinner from 'components/Spinner';
import moment from 'moment';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  height: '245px',
};

const Container = styled.div`
  padding: 15px;
`;

const Content = ({ isLoading, duringTime, setDurintTime }) => {
  const [isTimePickerModalVisible, setIsTimePickerModalVisible] = useState(false);
  const handleHideTimePickerModal = useCallback(() => {
    setIsTimePickerModalVisible(false);
  }, []);
  const handleShowTimePickerModal = useCallback(() => {
    setIsTimePickerModalVisible(true);
  }, []);
  const handleOnPickerCheck = useCallback((value) => {
    const hhmmTime = moment(value, 'HH:mm:ss').format('HH:mm');
    const hour = parseInt(hhmmTime.split(':')[0], 10);
    const minutes = parseInt(hhmmTime.split(':')[1], 10);
    setDurintTime(hour * 60 + minutes);
    setIsTimePickerModalVisible(false);
  }, [setDurintTime]);
  const value = moment('00:00:00', 'HH:mm:ss').add(duringTime, 'minutes').format('HH時mm分').toString();

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <Container>
        <InputBox
          title="停留時間"
          value={value}
          readonly
          handleOnClick={handleShowTimePickerModal}
        />

      </Container>
      <Modal
        id="TimePicker"
        optionStyle={modalStyle}
        isVisible={isTimePickerModalVisible}
        heightGrowing
      >
        <TimePicker
          startTime={moment('00:00:00', 'HH:mm:ss').add(duringTime, 'minutes').format('HH:mm').toString()}
          handleOnCancel={handleHideTimePickerModal}
          handleOnOk={handleOnPickerCheck}
        />
      </Modal>
    </>
  );
};

Content.propTypes = {
  duringTime: PropTypes.number,
  isLoading: PropTypes.bool,
  setDurintTime: PropTypes.func,
};

export default Content;
