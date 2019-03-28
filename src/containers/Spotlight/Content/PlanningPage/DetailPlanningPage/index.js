import React from 'react';
import DateTabs from './DateTabs';
import Content from './Content';
import {
  DetailPlanningPageContainer,
} from './Styled';

const DetailPlanningPage = (props) => (
  <DetailPlanningPageContainer>
    <div className="detail-planning__cover">
      <div className="detail-planning__cover-title">
        <span>台北購物之旅</span>
        <i className="fas fa-pen icon__pen" />
      </div>
      <div className="detail-planning__cover-period">2019年6月5日-2019年6月8日 / 4天</div>
    </div>
    <DateTabs {...props} />
    <Content {...props} />
  </DetailPlanningPageContainer>
);

export default DetailPlanningPage;
