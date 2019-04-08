import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SpotOperationBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  .spot-operation__button {
    background: white;
    border-radius: 10px;
    line-height: 40px;
    font-size: 16px;
    color: #333333;
    outline: none;
    cursor: pointer;
    &:hover {
      background: #eee;
    }
  }
  .spot-operation__button--normal {
    margin-top: 5px;
  }
  .spot-operation__button--cancel {
    color: #EB715A;
    margin: 15px 0px;
  }
`;

const SpotOperationBtn = ({
  handleHideModal,
  handleDeleteSpot,
  handleUpdate,
}) => (
  <SpotOperationBtnContainer>
    <button className="spot-operation__button" type="button" onClick={handleUpdate}>
      <span>景點設定</span>
    </button>
    <button className="spot-operation__button spot-operation__button--normal" type="button" onClick={handleDeleteSpot}>
      <span>刪除此行程</span>
    </button>
    <button className="spot-operation__button spot-operation__button--cancel" type="button" onClick={handleHideModal}>
      <span>取消</span>
    </button>
  </SpotOperationBtnContainer>
);

SpotOperationBtn.propTypes = {
  handleHideModal: PropTypes.func,
  handleDeleteSpot: PropTypes.func,
  handleUpdate: PropTypes.func,
};

SpotOperationBtn.defaultProps = {
  handleHideModal: () => { },
  handleDeleteSpot: () => { },
  handleUpdate: () => { },
};

export default SpotOperationBtn;
