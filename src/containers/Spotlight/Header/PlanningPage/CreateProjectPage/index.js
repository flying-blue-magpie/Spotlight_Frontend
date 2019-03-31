import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';

export default () => {
  const handleOnCheckBtn = () => {
    // console.log('check');
  };
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i
          role="presentation"
          className="fas fa-times icon-style"
          onClick={handleOnCheckBtn}
        />
      </div>
      <div>{PAGE_NAME.CREATE_PROJECT}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i
          role="presentation"
          className="fas fa-check icon-style"
          onClick={handleOnCheckBtn}
        />
      </div>
    </HeaderContainer>
  );
};
