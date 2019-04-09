import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import editDayIcon from 'assets/edit_day_icon.svg';
import Tab from './Tab';

const DateTabsContainer = styled.div`
  display: flex;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.16);
  position: relative;
  .date-tab__wrapper {
    display: flex;
    height: 50px;
    overflow-x: auto;
    border-radius: 10px;
    padding: 0px 15px;
  }
  .date-tab__edit-day-icon-wrapper {
    cursor: pointer;
  }
  .date-tab__edit-day-icon {
    height: 50px;
    width: 50px;
    position: absolute;
    right: 0px;
  }
`;

const DateTabs = (props) => {
  const {
    days,
    isOwner,
    projectId,
  } = props;
  const tabs = new Array(days).fill(0).map((x, index) => index);
  const handleGoToEditPlanningDay = useCallback(() => {
    const editPlanningDayPath = `/${PAGE_NAME.EDIT_PLANNING_DAY.name}/${projectId}`;
    history.push({
      pathname: editPlanningDayPath,
      search: window.location.search,
    });
  }, []);
  return (
    <DateTabsContainer>
      <div className="date-tab__wrapper">
        {
          tabs.map((tab) => (
            <Tab
              key={tab}
              id={tab}
              {...props}
            />
          ))
        }
      </div>
      {
        isOwner &&
        <div role="presentation" className="date-tab__edit-day-icon-wrapper" onClick={handleGoToEditPlanningDay}>
          <img src={editDayIcon} className="date-tab__edit-day-icon" alt="" />
        </div>
      }
    </DateTabsContainer>
  );
};

DateTabs.propTypes = {
  days: PropTypes.number,
  isOwner: PropTypes.bool,
  projectId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

DateTabs.defaultProps = {
  days: 0,
  isOwner: false,
  projectId: 0,
};

export default DateTabs;
