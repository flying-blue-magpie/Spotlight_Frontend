import React, { useContext, useEffect, useCallback } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { useTranslation } from 'react-i18next';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';

const { SpotlightContext } = Context;

export default () => {
  const { t } = useTranslation();
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
  const handleGoBackToPlanning = useCallback(() => {
    history.push(`/${PAGE_NAME.PERSONAL_PAGE.name}`);
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i role="presentation" className="fas fa-arrow-left icon-style" onClick={handleGoBackToPlanning} />
      </div>
      <div>{t(`${PAGE_NAME.SETTING.text}`)}</div>
    </HeaderContainer>
  );
};
