import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import {
  login,
} from 'containers/Spotlight/actions';

const row = `
  width: 300px;
  display: block;
  margin: 0 auto 24px;
`;

const UserName = styled.input`
  ${row}
  margin-top: 24px;
  border: solid 1px lightgray;
  font-size: 16px;
`;

const PassWord = styled.input`
  ${row}
  border: solid 1px lightgray;
  font-size: 16px;
`;

const LoginButton = styled.button`
  ${row}
  line-height: 1.5;
  background-color: lightgray;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`;

const RowSpaceBetween = styled.div`
  ${row}
  display: flex;
  justify-content: space-between;
`;

const Login = (props) => {
  const usernameRef = createRef();
  const passwordRef = createRef();
  const handleLoginBtnClick = () => {
    const {
      handleSubmitLogin,
    } = props;
    handleSubmitLogin({
      acc: usernameRef.current.value,
      pwd: passwordRef.current.value,
    });
  };
  return (
    <React.Fragment>
      <UserName ref={usernameRef} placeholder="輸入電子信箱/用戶名" />
      <PassWord ref={passwordRef} placeholder="輸入密碼" />
      <RowSpaceBetween>
        <label>
          <input id="remember-password" type="checkbox" />
          記住密碼
        </label>
        <label>
          <input id="auto-login" type="checkbox" />
          自動登入
        </label>
      </RowSpaceBetween>
      <LoginButton onClick={handleLoginBtnClick}>登入</LoginButton>
      <RowSpaceBetween>
        <div>立即註冊</div>
        <div>忘記密碼？</div>
      </RowSpaceBetween>
    </React.Fragment>
  );
};

Login.propTypes = {
  handleSubmitLogin: PropTypes.func,
};

Login.defaultProps = {
  handleSubmitLogin: () => { },
};

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitLogin: ({ acc, pwd }) => dispatch(login({ acc, pwd })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
