import React, { useCallback } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import { routePathConfig } from 'containers/Spotlight/Content/Routes';

export default () => {
  const handleGoBack = useCallback(() => {
    history.push(routePathConfig.planningPagePath);
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i className="fas fa-arrow-left icon-style" onClick={handleGoBack} />
      </div>
      <div>{PAGE_NAME.EDIT_PLANNING}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i className="fas fa-exchange-alt icon-style icon-transition" />
        <i className="fas fa-check icon-style" />
      </div>
    </HeaderContainer>
  );
};
