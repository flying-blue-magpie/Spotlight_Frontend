import React, { useContext, useEffect } from 'react';
import Context from 'containers/Spotlight/Context';
import {
  HeaderContainer,
} from '../Styled';

const { SpotlightContext } = Context;

export default () => {
  const context = useContext(SpotlightContext);
  const {
    setIsNavVisible,
  } = context;
  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
    };
  }, []);
  return (
    <HeaderContainer>
      {'登入'}
    </HeaderContainer>
  );
};
