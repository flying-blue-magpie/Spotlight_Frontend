import styled from 'styled-components';

const row = `
  width: 300px;
  display: block;
  margin: 0 auto 24px;
`;

export const Container = styled.div`
  background-color: #FAFAFA;
  min-height: 100%;
`;

export const UserName = styled.input`
  ${row}
  margin-top: 24px;
  border: solid 1px lightgray;
  font-size: 16px;
`;

export const PassWord = styled.input`
  ${row}
  border: solid 1px lightgray;
  font-size: 16px;
`;

export const LoginButton = styled.button`
  ${row}
  line-height: 1.5;
  background-color: lightgray;
  font-size: 16px;
  cursor: pointer;
  outline: none;
`;

export const RegisterRow = styled.div`
  ${row}
  display: flex;
  justify-content: center;
`;

export const ErrorMessage = styled.div`
  ${row}
  color: red;
`;

export const Logo = styled.img`
  width: 125px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
  margin-top: 24px;
`;
