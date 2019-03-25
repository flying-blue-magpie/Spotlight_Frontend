import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
} from '../Styled';

export default () =>
  <HeaderContainer>
    <div>{PAGE_NAME.PLANNING}</div>
    <div className="header-container__icon-wrapper">
      <i className="fas fa-exchange-alt icon-style icon-transition" />
      <i className="fas fa-plus icon-style" />
    </div>
  </HeaderContainer>