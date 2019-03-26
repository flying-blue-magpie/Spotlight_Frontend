import React, { useContext, useEffect } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Context from 'containers/Spotlight/Context';
import {
  HeaderContainer,
} from '../Styled';

export default () => {
  const context = useContext(Context.SpotlightContext);
  const {
    headerTitle,
    setHeaderTitle,
  } = context;
  useEffect(() => {
    setHeaderTitle(PAGE_NAME.PLANNING)
  });
  return (
    <HeaderContainer>
      <div>{headerTitle}</div>
      <div className="header-container__icon-wrapper">
        <i className="fas fa-exchange-alt icon-style icon-transition" />
        <i className="fas fa-plus icon-style" />
      </div>
    </HeaderContainer>
  );
};
