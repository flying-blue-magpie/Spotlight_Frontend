import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { useTranslation } from 'react-i18next';
import {
  HeaderContainer,
} from '../Styled';

export default () => {
  const { t } = useTranslation();
  return (
    <HeaderContainer>
      <div>{t(`${PAGE_NAME.ARTICLES.text}`)}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i role="presentation" className="fas fa-pen icon-style" onClick={() => {}} />
        <i
          role="presentation"
          className="fas fa-plus icon-style"
          data-redirect-path={PAGE_NAME.CREATE_PROJECT.name}
          onClick={() => {}}
        />
      </div>
    </HeaderContainer>
  );
};
