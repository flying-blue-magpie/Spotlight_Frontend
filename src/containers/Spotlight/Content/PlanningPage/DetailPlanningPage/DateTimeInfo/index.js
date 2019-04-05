import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import moment from 'moment';
import Modal from 'components/Modal';
import {
  WEEKDAYS_SHORT,
} from 'containers/Spotlight/constants';

const StyledDateTimeInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0px 30px;
  justify-content: space-between;
  .date-time-info__start-time-wrapper {
    display: flex;
    align-items: center;
    line-height: 20px;
    background: #707070;
    color: white;
    padding: 6px 8px;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
      background: #70707080;
    }
  }
  .date-time-info__clock-icon {
    margin-right: 5px;
  }
`;

const DateTimeInfo = (props) => {
  const {
    startDay,
    plan,
  } = props;
  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const date = moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').format('YYYY年MM月DD日');
  const weekday = WEEKDAYS_SHORT[moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').get('weekday')];
  const startTime = moment(plan.getIn([day - 1, 'start_time']), 'HH:mm').format('HH:mm');
  return (
    <>
      <StyledDateTimeInfo>
        <div>{`${date} ${weekday}`}</div>
        <div className="date-time-info__start-time-wrapper">
          <i className="far fa-clock date-time-info__clock-icon" />
          <span>{`出發時間 ${startTime}`}</span>
        </div>
      </StyledDateTimeInfo>
      <Modal
        optionStyle={{ bottom: '0px' }}
        isVisible={false}
      >
        <div>123</div>
      </Modal>
    </>
  );
};

DateTimeInfo.propTypes = {
  startDay: PropTypes.string,
  plan: PropTypes.instanceOf(List),
};

DateTimeInfo.defaultProps = {
  startDay: '',
  plan: List(),
};

export default DateTimeInfo;
