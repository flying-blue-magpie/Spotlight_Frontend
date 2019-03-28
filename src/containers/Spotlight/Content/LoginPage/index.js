import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
`;

const RowSpaceBetween = styled.div`
  ${row}
  display: flex;
  justify-content: space-between;
`;

const Login = () => (
  <React.Fragment>
    <UserName placeholder="輸入電子信箱/用戶名" />
    <PassWord placeholder="輸入密碼" />
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
    <LoginButton>登入</LoginButton>
    <RowSpaceBetween>
      <div>立即註冊</div>
      <div>忘記密碼？</div>
    </RowSpaceBetween>
  </React.Fragment>
);

export default Login;
