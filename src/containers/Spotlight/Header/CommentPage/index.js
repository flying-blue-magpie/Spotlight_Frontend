import React from 'react';

import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';

import {
  HeaderContainer,
  HeaderTitle,
  HeaderLeftButtons,
  HeaderRightButtons,
  HeaderButton,
} from '../Styled';

export default () => (
  <HeaderContainer>
    <HeaderLeftButtons>
      <HeaderButton onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left" />
      </HeaderButton>
    </HeaderLeftButtons>
    <HeaderTitle>
      {PAGE_NAME.COMMENT.text}
    </HeaderTitle>
    <HeaderRightButtons />
  </HeaderContainer>
);
