import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const DateTabsWrapper = styled.div`
  background: lightgray;
  height: 42px;
  display: flex;
`;

const DateTabs = (props) => {
  const tabs = new Array(4).fill(0).map((x, index) => index);
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

export default DateTabs;
