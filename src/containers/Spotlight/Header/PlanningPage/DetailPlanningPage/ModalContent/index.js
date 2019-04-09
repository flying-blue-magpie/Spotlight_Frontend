import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalContentContainer = styled.div`
  width: 250px;
  height: 180px;
  background: white;
  border-radius: 10px;
  .modal-content__message-wrapper {
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content__message {
    width: 140px;
    font-size: 16px;
    text-align: center;
  }
  .modal-content__button-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 0px 0px 10px 10px;
    height: 40px;
  }
  .modal-content__button {
    outline: none;
    border: none;
    background: #EEEEEE;
    color: #292929;
    font-weight: 500;
    border-radius: 0px 0px 0px 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.85;
    }
  }
  .modal-content__button-active {
    background: ${(props) => props.theme.mainColor};
    border-radius: 0px 0px 10px 0px;
  }
`;

const ModalContent = (props) => {
  const {
    message,
    onOk,
    onCancel,
  } = props;
  return (
    <ModalContentContainer>
      <div className="modal-content__message-wrapper">
        <div className="modal-content__message">{message}</div>
      </div>
      <div className="modal-content__button-group">
        <button type="button" className="modal-content__button" onClick={onCancel}>取消</button>
        <button type="button" className="modal-content__button modal-content__button-active" onClick={onOk}>確定</button>
      </div>
    </ModalContentContainer>
  );
};

ModalContent.propTypes = {
  message: PropTypes.string.isRequired,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

ModalContent.propTypes = {
  onOk: () => { },
  onCancel: () => { },
};

export default ModalContent;
