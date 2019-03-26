import React from 'react';
import styled from 'styled-components';
import history from 'utils/history';

const TabWrapper = styled.div`
  border-right: 1px solid #ccc;
  width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #707070;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #707070;
    box-sizing: border-box;
  }
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
    location,
  } = props;
  const handleOnClick = () => {
    history.push({
      pathname: `${location.pathname}`,
      search: `?day=${id+1}`,
    });
  }
  return (
    <TabWrapper onClick={handleOnClick}>
      <div className="tab__date">{`6/${id + 5}`}</div>
      <div className="tab__number">第{id + 1}天</div>
    </TabWrapper>
  );
};

export default Tab;
