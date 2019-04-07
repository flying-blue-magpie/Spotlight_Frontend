import React, { createRef, useEffect, useContext } from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
import Context from 'containers/Spotlight/Context';

import {
  UserName,
  PassWord,
  LoginButton,
  RegisterRow,
  ErrorMessage,
  Logo,
  Container,
} from './Styled';

const { SpotlightContext } = Context;

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

  const { setIsHeaderVisible } = useContext(SpotlightContext);

  useEffect(() => {
    if (loginStatusMeta.get('isLoaded') && user) {
      history.push(`/${PAGE_NAME.EXPLORE}`);
    }
    setIsHeaderVisible(false);

    return () => {
      setIsHeaderVisible(true);
    };
  }, [user]);

  return (
    loginStatusMeta.get('isLoaded') && !user ? (
      <Container>
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
      </Container>
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
