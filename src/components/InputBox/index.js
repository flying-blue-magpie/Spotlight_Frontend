import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBoxWrapper = styled.div`
  display: flex;
  height: 40px;
  color: #707070;
  margin-top: 15px;
  border-radius: 20px;
  .input-box__label-box {
    background: rgba(238, 238, 238, 1);
    width: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: rgba(51, 51, 51, 1);
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 20px 0px 0px 20px;
    padding-left: 10px;
  }
  .input-box__input {
    background: rgba(238, 238, 238, 1);
    border: none;
    outline: none;
    font-size: 14px;
    padding: 0px 10px;
    flex-grow: 1;
    border-radius: 0px 20px 20px 0px;
  }
`;

const InputBox = ({
  title, inputType, defaultValue, handleOnChange,
}) => (
  <InputBoxWrapper className="input-box__input-wrapper">
    <div className="input-box__label-box"><span>{title}</span></div>
    <input type={inputType} defaultValue={defaultValue} className="input-box__input" onChange={handleOnChange} />
  </InputBoxWrapper>
);

InputBox.propTypes = {
  title: PropTypes.string,
  inputType: PropTypes.string,
  defaultValue: PropTypes.string,
  handleOnChange: PropTypes.func,
};

InputBox.defaultProps = {
  title: '',
  inputType: 'text',
  defaultValue: '',
  handleOnChange: () => { },
};

export default InputBox;
