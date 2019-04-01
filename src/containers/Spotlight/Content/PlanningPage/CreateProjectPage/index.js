import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from 'containers/Spotlight/Context';

const { SpotlightContext } = Context;

const StyledCreateProjectPage = styled.div`
  padding: 0px 15px;
  .create-project__input-wrapper {
    display: flex;
    border: 1px solid #B7B7B7;
    height: 40px;
    color: #707070;
    margin-top: 15px;
  }
  .create-project__label-box {
    background: #ececec;
    width: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .create-project__input {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 0px 10px;
    flex-grow: 1;
  }
`;

const CreateProjectPage = () => {
  const context = useContext(SpotlightContext);
  const {
    setNewProject,
  } = context;
  const handleOnNameChange = (event) => {
    const currentValue = event.currentTarget.value;
    setNewProject((newProject) => newProject.set('name', currentValue));
  };
  const handleOnStartDayChange = (event) => {
    const currentValue = event.currentTarget.value;
    setNewProject((newProject) => newProject.set('start_day', currentValue));
  };
  const handleOnDaysChange = (event) => {
    const currentValue = event.currentTarget.value > 0 ? parseInt(event.currentTarget.value, 10) : 0;
    setNewProject((newProject) => newProject.set('tot_days', currentValue));
  };
  return (
    <StyledCreateProjectPage>
      <div className="create-project__input-wrapper">
        <div className="create-project__label-box"><span>旅程名稱</span></div>
        <input type="text" className="create-project__input" onChange={handleOnNameChange} />
      </div>
      <div className="create-project__input-wrapper">
        <div className="create-project__label-box"><span>出發日期</span></div>
        <input type="date" className="create-project__input" onChange={handleOnStartDayChange} />
      </div>
      <div className="create-project__input-wrapper">
        <div className="create-project__label-box"><span>天數</span></div>
        <input type="text" className="create-project__input" onChange={handleOnDaysChange} />
      </div>
    </StyledCreateProjectPage>
  );
};

export default CreateProjectPage;