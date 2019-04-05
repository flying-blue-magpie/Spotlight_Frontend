import React from 'react';
import styled from 'styled-components';
import InputBox from 'components/InputBox';

const UpdatePlanningPageWrapper = styled.div`
  padding: 0px 15px;
`;

const UpdatePlanningPage = () => (
  <UpdatePlanningPageWrapper>
    <InputBox
      title="旅程名稱"
      handleOnChange={() => {}}
    />
    <InputBox
      title="出發日期"
      inputType="date"
      handleOnChange={() => {}}
    />
  </UpdatePlanningPageWrapper>
);

export default UpdatePlanningPage;
