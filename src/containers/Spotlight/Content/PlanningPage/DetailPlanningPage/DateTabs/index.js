import React from 'react';
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
  const tabs = new Array(7).fill(0).map((x, index) => index);
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
