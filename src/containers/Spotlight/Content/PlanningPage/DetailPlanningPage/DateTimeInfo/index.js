import React from 'react';
import styled from 'styled-components';

const StyledDateTimeInfo = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  .date-time-info__date-wrapper {
    border-right: 1px solid #ccc;
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }
  .date-time-info__start-time-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
  }
  .date-time-info__icon {
    margin-right: 8px;
  }
`;

const DateTimeInfo = () => (
  <StyledDateTimeInfo>
    <div className="date-time-info__date-wrapper">
      <i className="far fa-calendar-alt date-time-info__icon" />
      <div>2019年6月5日 週三</div>
    </div>
    <div className="date-time-info__start-time-wrapper">
      <i className="far fa-clock date-time-info__icon" />
      <div>出發時間 8:00</div>
    </div>
  </StyledDateTimeInfo>
);

export default DateTimeInfo;
