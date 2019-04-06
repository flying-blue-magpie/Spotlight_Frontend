import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
} from '../Styled';

export default () => (
  <HeaderContainer>
    <div>{PAGE_NAME.PERSONAL_PAGE.text}</div>
    <div className="header-container__icon-wrapper icon-right">
      <i className="fas fa-cog icon-style" />
    </div>
  </HeaderContainer>
);
