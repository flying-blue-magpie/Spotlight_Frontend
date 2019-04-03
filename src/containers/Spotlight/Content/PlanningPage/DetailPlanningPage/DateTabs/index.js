import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const DateTabsWrapper = styled.div`
  background: #e4e4e4;
  height: 50px;
  padding: 0px 10px;
  display: flex;
  overflow-x: auto;
`;

const DateTabs = (props) => {
  const {
    days,
  } = props;
  const tabs = new Array(days).fill(0).map((x, index) => index);
  return (
    <DateTabsWrapper>
      {
        tabs.map((tab) => (
          <Tab
            key={tab}
            id={tab}
            {...props}
          />
        ))
      }
    </DateTabsWrapper>
  );
};

DateTabs.propTypes = {
  days: PropTypes.number,
};

DateTabs.defaultProps = {
  days: 0,
};

export default DateTabs;
