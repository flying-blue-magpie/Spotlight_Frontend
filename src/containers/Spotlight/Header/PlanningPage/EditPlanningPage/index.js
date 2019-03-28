import React, { useContext, useEffect, useCallback } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';

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
  });
  const handleGoBack = useCallback(() => {
    history.goBack();
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i role="presentation" className="fas fa-arrow-left icon-style" onClick={handleGoBack} />
      </div>
      <div>{PAGE_NAME.EDIT_PLANNING}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i className="fas fa-exchange-alt icon-style icon-transition" />
        <i className="fas fa-check icon-style" />
      </div>
    </HeaderContainer>
  );
};
