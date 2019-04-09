import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100%;
`;

const inputLeftPadding = '56px';

export const UserNameContainer = styled.div`
  position: relative;
  margin: 0 15px 10px;

  &:before {
    font-family: "Font Awesome 5 Free";
    content: "\f007";
    display: inline-block;
    vertical-align: middle;
    font-weight: 900;
    position: absolute;
    top: 50%;
    left: calc(${inputLeftPadding} / 2);
    transform: translate(-50%, -50%);
  }
`;

export const UserName = styled.input`
  width: 100%;
  border: 0;
  font-size: 14px;
  border-radius: 20px;
  background-color: #EEEEEE;
  padding: 10px 0 10px ${inputLeftPadding};
  appearance: none;
  outline: none;
  color: #333;
`;


export const PassWordContainer = styled.div`
  position: relative;
  margin: 0 15px 30px;
`;

export const PasswordIcon = styled.img`
  position: absolute;
  top: 50%;
  left: calc(${inputLeftPadding} / 2);
  transform: translate(-50%, -50%);
`;

export const PassWord = styled.input`
  width: 100%;
  border: 0;
  font-size: 14px;
  border-radius: 20px;
  background-color: #EEEEEE;
  padding: 10px 0 10px ${inputLeftPadding};
  appearance: none;
  outline: none;
  color: #333;
`;

const loginButtonHorizontalMargin = '15px';

export const LoginButton = styled.button`
  background-color: #F9D94A;
  border-radius: 20px;
  appearance: none;
  border: 0;
  margin: 0 ${loginButtonHorizontalMargin} 15px;
  font-size: 16px;
  width: calc(100% - 2 * ${loginButtonHorizontalMargin});
  display: block;
  color: #333333;
  font-weight: bold;
  padding: 10px 0;
  cursor: pointer;
  outline: none;
`;

export const RegisterRow = styled.div`
  display: flex;
  justify-content: center;
  color: #333333;
  font-size: 12px;
`;

export const RegisterLink = styled.a`
  margin-left: 3px;
  font-weight: bold;
  
  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: #333333;
    text-decoration: underline;
  }
`;

export const ErrorMessage = styled.div`
  display: block;
  text-align: center;
  margin-top: 15px;
  color: red;
`;

export const Logo = styled.img`
  color: #333333;
  font-size: 37px;
  padding: 100px 0 64px;
  display: block;
  margin: 0 auto;
  width: 260px;
`;
