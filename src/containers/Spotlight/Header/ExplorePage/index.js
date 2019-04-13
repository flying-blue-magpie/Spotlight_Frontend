import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftButtons,
  HeaderRightButtons,
} from '../Styled';

const ExplorePageHeader = () => (
  <HeaderContainer>
    <HeaderLeftButtons />
    <HeaderTitle>
      {PAGE_NAME.EXPLORE.text}
    </HeaderTitle>
    <HeaderRightButtons />
  </HeaderContainer>
);

ExplorePageHeader.propTypes = {
};

export default ExplorePageHeader;
