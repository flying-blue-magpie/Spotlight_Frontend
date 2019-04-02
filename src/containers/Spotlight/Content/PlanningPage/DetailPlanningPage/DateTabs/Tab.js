import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from 'utils/history';

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #707070;
  position: relative;
  cursor: pointer;
  .tab__number {
    font-size: 14px;
    background: #f9f9f9;
    margin: 0px 5px;
    border-radius: 50px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tab__text {
    width: 50px;
    text-align: center;
    font-size: 16px;
  }
  .tab__times-circle-icon {
    font-size: 25px;
    line-height: 30px;
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
      search: `?day=${id + 1}`,
    });
  };
  return (
    <TabWrapper onClick={handleOnClick}>
      <div className="tab__number">
        <div className="tab__text">{`第${id + 1}天`}</div>
        <i className="fas fa-times-circle tab__times-circle-icon" />
      </div>
    </TabWrapper>
  );
};

Tab.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  location: PropTypes.object,
};

Tab.defaultProps = {
  id: 1,
  location: {},
};

export default Tab;
