import React, { useContext, useEffect } from 'react';
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
    setHeaderTitle('登入')
  });
  return (
    <HeaderContainer>
      {headerTitle}
  </HeaderContainer>
  );
};
