import React from 'react';
import styled from 'styled-components';

const TabWrapper = styled.div`
  border-right: 1px solid #ccc;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #707070;
  .tab__date {
    font-size: 12px;
  }
  .tab__number {
    font-size: 14px;
  }
`;

const Tab = (props) => {
  const {
    id,
  } = props;
  return (
    <TabWrapper>
      <div className="tab__date">{`6/${id + 1}`}</div>
      <div className="tab__number">第{id + 1}天</div>
    </TabWrapper>
  );
};

export default Tab;
