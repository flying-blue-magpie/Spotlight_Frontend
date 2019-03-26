import React from 'react';
import DateTabs from './DateTabs';
import Content from './Content';
import {
  EditPlanningPageContainer,
} from './Styled';

const EditPlanningPage = (props) => (
  <EditPlanningPageContainer>
    <div className="edit-planning__cover">
      <div className="edit-planning__cover-title">
        <span>台北購物之旅</span>
        <i className="fas fa-pen icon__pen" />
      </div>
      <div className="edit-planning__cover-period">2019年6月5日-2019年6月8日 / 4天</div>
    </div>
    <DateTabs {...props} />
    <Content {...props} />
  </EditPlanningPageContainer>
);

export default EditPlanningPage;
