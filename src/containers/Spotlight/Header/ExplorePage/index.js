import React from 'react';
import { useTranslation } from 'react-i18next';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftButtons,
  HeaderRightButtons,
} from '../Styled';

const ExplorePageHeader = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <HeaderLeftButtons />
      <HeaderTitle>
        {t(PAGE_NAME.EXPLORE.text)}
      </HeaderTitle>
      <HeaderRightButtons />
    </HeaderContainer>
  );
};

ExplorePageHeader.propTypes = {
};

export default ExplorePageHeader;
