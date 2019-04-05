import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBoxWrapper = styled.div`
  display: flex;
  border: 1px solid #B7B7B7;
  height: 40px;
  color: #707070;
  margin-top: 15px;
  .input-box__label-box {
    background: #ececec;
    width: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .input-box__input {
    border: none;
    outline: none;
    font-size: 14px;
    padding: 0px 10px;
    flex-grow: 1;
  }
`;

const InputBox = ({ title, inputType, handleOnChange }) => (
  <InputBoxWrapper className="input-box__input-wrapper">
    <div className="input-box__label-box"><span>{title}</span></div>
    <input type={inputType} className="input-box__input" onChange={handleOnChange} />
  </InputBoxWrapper>
);

InputBox.propTypes = {
  title: PropTypes.string,
  inputType: PropTypes.string,
  handleOnChange: PropTypes.func,
};

InputBox.defaultProps = {
  title: '',
  inputType: 'text',
  handleOnChange: () => { },
};

export default InputBox;
