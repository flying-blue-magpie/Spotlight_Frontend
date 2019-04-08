import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from 'utils/history';

const setBackgroundColor = (isActive) => (isActive ? 'tab__number--active' : '');

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #707070;
  position: relative;
  &:last-child {
    padding-right: 50px;
  }
  .tab__number {
    font-size: 14px;
    margin: 0px 5px;
    border-radius: 50px;
    width: 80px;
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme.mainColor};
      color: rgba(51, 51, 51, 1);
    }
  }
  .tab__number--active {
    background: ${(props) => props.theme.mainColor};
    color: rgba(51, 51, 51, 1);
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
    history.replace({
      pathname: `${location.pathname}`,
      search: `?day=${id + 1}`,
    });
  };
  const searchParams = new URLSearchParams(window.location.search);
  const currentDay = searchParams.get('day');
  return (
    <TabWrapper>
      <div
        role="presentation"
        className={`tab__number ${setBackgroundColor(currentDay === (id + 1).toString())}`}
        onClick={handleOnClick}
      >
        <div className="tab__text">{`第${id + 1}天`}</div>
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
