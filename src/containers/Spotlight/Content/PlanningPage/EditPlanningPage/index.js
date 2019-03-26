import React from 'react';
import {
  EditPlanningPageContainer,
  DateTabsWrapper,
} from './Styled';

const EditPlanningPage = () => (
  <EditPlanningPageContainer>
    <div className="edit-planning__cover">
      <div className="edit-planning__cover-title">
        <span>台北購物之旅</span>
        <i className="fas fa-pen icon__pen" />
      </div>
      <div className="edit-planning__cover-period">2019年6月5日-2019年6月9日 / 4天</div>
    </div>
    <DateTabsWrapper>
      date tabs
    </DateTabsWrapper>
    <div>
      body
    </div>
  </EditPlanningPageContainer>
);

export default EditPlanningPage;
