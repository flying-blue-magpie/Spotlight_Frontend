import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import Picker from 'react-mobile-picker-scroll';
import {
  HOURS,
  MINUTES,
} from 'containers/Spotlight/constants';

const heightGrowingAnimation = keyframes`
  from {
    height: 10%;
  }
  to {
    height: 100%;
  }
`;

const TimePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  animation: 0.2s ease-in-out ${heightGrowingAnimation};
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
    justify-content: center;
    align-items: center;
    font-size: 18px;
    overflow: hidden;
  }
  .time-picker__option-label {
    margin: 0px 20px;
    font-weight: 500;
  }
`;

class TimePicker extends Component {
  static propTypes = {
    startTime: PropTypes.string,
    handleOnOk: PropTypes.func,
    handleOnCancel: PropTypes.func,
  }

  static defaultProps = {
    startTime: '08:00',
    handleOnOk: () => { },
    handleOnCancel: () => { },
  }

  constructor(props) {
    super(props);
    const {
      startTime,
    } = props;
    this.state = {
      hourValueGroups: {
        hour: startTime.split(':')[0],
      },
      hourOptionGroups: {
        hour: HOURS,
      },
      minuteValueGroups: {
        minute: startTime.split(':')[1],
      },
      minuteOptionGroups: {
        minute: MINUTES,
      },
    };
  }

  handleHourChange = (name, value) => {
    this.setState(({ hourValueGroups }) => ({
      hourValueGroups: {
        ...hourValueGroups,
        [name]: value,
      },
    }));
  };

  handleMinuteChange = (name, value) => {
    this.setState(({ minuteValueGroups }) => ({
      minuteValueGroups: {
        ...minuteValueGroups,
        [name]: value,
      },
    }));
  };

  handleOnCheck = () => {
    const {
      handleOnOk,
    } = this.props;
    const {
      hourValueGroups,
      minuteValueGroups,
    } = this.state;
    handleOnOk(`${hourValueGroups.hour}:${minuteValueGroups.minute}:00`);
  }

  render() {
    const {
      handleOnCancel,
    } = this.props;
    const {
      hourValueGroups,
      hourOptionGroups,
      minuteValueGroups,
      minuteOptionGroups,
    } = this.state;
    return (
      <TimePickerWrapper>
        <div className="time-picker__buttom-wrapper">
          <div role="presentation" className="time-picker__buttom" onClick={handleOnCancel}>取消</div>
          <div role="presentation" className="time-picker__buttom" onClick={this.handleOnCheck}>確定</div>
        </div>
        <div className="time-picker__scroll-wrapper">
          <div>
            <Picker
              valueGroups={hourValueGroups}
              optionGroups={hourOptionGroups}
              onChange={this.handleHourChange}
            />
          </div>
          <div className="time-picker__option-label">時</div>
          <div>
            <Picker
              valueGroups={minuteValueGroups}
              optionGroups={minuteOptionGroups}
              onChange={this.handleMinuteChange}
            />
          </div>
          <div className="time-picker__option-label">分</div>
        </div>
      </TimePickerWrapper>
    );
  }
}

export default TimePicker;
