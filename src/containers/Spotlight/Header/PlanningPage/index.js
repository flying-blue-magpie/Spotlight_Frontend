import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  findAttributeInEvent,
} from 'utils/event';
import history from 'utils/history';
import {
  HeaderContainer,
} from '../Styled';

export default () => {
  const handleOnClick = (event) => {
    const path = findAttributeInEvent(event, 'data-redirect-path');
    history.push(path);
  };
  return (
    <HeaderContainer>
      <div>{PAGE_NAME.PLANNING}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i className="fas fa-exchange-alt icon-style icon-transition" />
        <i
          role="presentation"
          className="fas fa-plus icon-style"
          data-redirect-path={PAGE_NAME.CREATE_PROJECT}
          onClick={handleOnClick}
        />
      </div>
    </HeaderContainer>
  );
};
