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
  UserNameContainer,
  PassWordContainer,
  PasswordIcon,
  RegisterLink,
} from './Styled';
import keyIcon from './key.svg';
import LogoSrc from './logo.png';

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

  const {
    setIsHeaderVisible,
    setIsNavVisible,
  } = useContext(SpotlightContext);

  useEffect(() => {
    if (loginStatusMeta.get('isLoaded') && user) {
      history.push(`/${PAGE_NAME.EXPLORE.name}`);
    }
  }, [user]);

  useEffect(() => {
    setIsHeaderVisible(false);
    setIsNavVisible(false);

    return () => {
      setIsHeaderVisible(true);
      setIsNavVisible(true);
    };
  }, []);

  return (
    loginStatusMeta.get('isLoaded') && !user ? (
      <Container>
        <Logo src={LogoSrc} />
        <UserNameContainer>
          <UserName ref={usernameRef} type="email" placeholder="請輸入註冊的 E-mail" />
        </UserNameContainer>
        <PassWordContainer>
          <PasswordIcon src={keyIcon} />
          <PassWord ref={passwordRef} type="password" placeholder="輸入密碼" />
        </PassWordContainer>
        <LoginButton onClick={handleLoginBtnClick}>登入</LoginButton>
        <RegisterRow>
          還沒有帳號嗎?
          <RegisterLink href="/#" onClick={handleRegisterBtnClick}>
            前往註冊
          </RegisterLink>
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
