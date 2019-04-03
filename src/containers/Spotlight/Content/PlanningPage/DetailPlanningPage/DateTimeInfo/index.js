import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
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
`;

const DateTimeInfo = (props) => {
  const {
    startDay,
  } = props;
  const searchParams = new URLSearchParams(window.location.search);
  const day = parseInt(searchParams.get('day'), 10);
  const date = moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').format('YYYY年MM月DD日');
  const weekday = WEEKDAYS_SHORT[moment(startDay, 'YYYY-MM-DD').add(day - 1, 'days').get('weekday')];
  return (
    <StyledDateTimeInfo>
      <div>{`${date} ${weekday}`}</div>
    </StyledDateTimeInfo>
  );
};

DateTimeInfo.propTypes = {
  startDay: PropTypes.string,
};

DateTimeInfo.defaultProps = {
  startDay: '',
};

export default DateTimeInfo;
