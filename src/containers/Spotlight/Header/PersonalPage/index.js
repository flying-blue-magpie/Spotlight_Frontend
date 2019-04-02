import React, { useCallback } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from '../Styled';

export default () => {
  const handleGoToSetting = useCallback(() => {
    history.push(`/${PAGE_NAME.SETTING}`);
  });
  return (
    <HeaderContainer>
      <div>{PAGE_NAME.PERSONAL_PAGE}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i role="presentation" className="fas fa-cog icon-style" onClick={handleGoToSetting} />
      </div>
    </HeaderContainer>
  );
};
