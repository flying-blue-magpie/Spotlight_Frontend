import React, { useCallback } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { useTranslation } from 'react-i18next';
import history from 'utils/history';
import {
  HeaderContainer,
} from '../Styled';

export default () => {
  const { t } = useTranslation();
  const handleGoToSetting = useCallback(() => {
    history.push(`/${PAGE_NAME.SETTING.name}`);
  });
  return (
    <HeaderContainer>
      <div>{t(`${PAGE_NAME.PERSONAL_PAGE.text}`)}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i role="presentation" className="fas fa-cog icon-style" onClick={handleGoToSetting} />
      </div>
    </HeaderContainer>
  );
};
