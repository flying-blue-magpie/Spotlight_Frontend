import React, { createRef, useEffect } from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import history from 'utils/history';
import {
  login,
  register,
} from 'containers/Spotlight/actions';
import {
  selectLoginMeta,
  selectLoginStatusMeta,
  selectUser,
} from 'containers/Spotlight/selectors';
import { PAGE_NAME } from 'Styled/Settings/constants';

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

const RegisterRow = styled.div`
  ${row}
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  ${row}
  color: red;
`;

const Logo = styled.img`
  width: 125px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  margin-top: 24px;
`;

const Login = (props) => {
  const usernameRef = createRef();
  const passwordRef = createRef();
  const {
    user,
    loginMeta,
    loginStatusMeta,
  } = props;
  const handleLoginBtnClick = () => {
    const {
      handleSubmitLogin,
    } = props;
    handleSubmitLogin({
      acc: usernameRef.current.value,
      pwd: passwordRef.current.value,
    });
  };

  const handleRegisterBtnClick = () => {
    const {
      handleSubmitRegister,
    } = props;
    handleSubmitRegister({
      acc: usernameRef.current.value,
      pwd: passwordRef.current.value,
    });
  };

  const isAnonymous = loginStatusMeta.get('isLoaded') && !user;

  useEffect(() => {
    if (user) {
      history.push(`/${PAGE_NAME.EXPLORE}`);
    }
  }, [user]);

  return (
    isAnonymous ? (
      <React.Fragment>
        <Logo src="https://avatars0.githubusercontent.com/u/48876369?s=200&v=4" />
        <UserName ref={usernameRef} type="email" placeholder="輸入電子信箱/用戶名" />
        <PassWord ref={passwordRef} type="password" placeholder="輸入密碼" />
        <LoginButton onClick={handleLoginBtnClick}>登入</LoginButton>
        <RegisterRow>
          <a href="/#" onClick={handleRegisterBtnClick}>
            立即註冊
          </a>
        </RegisterRow>
        {loginMeta.get('error') && <ErrorMessage>登入失敗</ErrorMessage>}
      </React.Fragment>
    ) : null
  );
};

Login.propTypes = {
  handleSubmitLogin: PropTypes.func,
  handleSubmitRegister: PropTypes.func,
  user: PropTypes.instanceOf(Map),
  loginMeta: PropTypes.instanceOf(Map),
  loginStatusMeta: PropTypes.instanceOf(Map),
};

Login.defaultProps = {
  handleSubmitLogin: () => { },
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  loginMeta: selectLoginMeta(),
  loginStatusMeta: selectLoginStatusMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitLogin: ({ acc, pwd }) => dispatch(login({ acc, pwd })),
  handleSubmitRegister: ({ acc, pwd }) => dispatch(register({ acc, pwd })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
