import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TimePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100%;
  .time-picker__buttom-wrapper {
    height: 50px;
    background: ${(props) => props.theme.mainColor};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .time-picker__buttom {
    padding: 0px 15px;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      color: #333333;
      font-weight: 500;
    }
  }

  .time-picker__scroll-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border: 1px solid grey;
  }
`;

const TimePicker = ({
  handleOnCancel,
  handleOnOk,
}) => (
  <TimePickerWrapper>
    <div className="time-picker__buttom-wrapper">
      <div role="presentation" className="time-picker__buttom" onClick={handleOnCancel}>取消</div>
      <div role="presentation" className="time-picker__buttom" onClick={handleOnOk}>確定</div>
    </div>
    <div className="time-picker__scroll-wrapper">
      <div style={{ textAlign: 'left' }}>hour</div>
      <div>時</div>
      <div>minues</div>
      <div>分</div>
    </div>
  </TimePickerWrapper>
);

TimePicker.propTypes = {
  handleOnOk: PropTypes.func,
  handleOnCancel: PropTypes.func,
};

TimePicker.propTypes = {
  handleOnOk: () => {},
  handleOnCancel: () => {},
};

export default TimePicker;
