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
      {t(`${PAGE_NAME.TRAVEL_WALL.text}`)}
    </HeaderContainer>
  );
};
