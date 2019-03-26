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
    setHeaderTitle(PAGE_NAME.TRAVEL_WALL)
  });
  return (
    <HeaderContainer>
      {headerTitle}
    </HeaderContainer>
  );
};
