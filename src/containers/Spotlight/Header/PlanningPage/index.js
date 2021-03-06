import React, { useContext, useCallback, useEffect } from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { useTranslation } from 'react-i18next';
import {
  findAttributeInEvent,
} from 'utils/event';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import {
  HeaderContainer,
} from '../Styled';

const { SpotlightContext } = Context;

export default () => {
  const { t } = useTranslation();
  const context = useContext(SpotlightContext);
  const {
    isEditMode,
    setIsEditMode,
    setIsNavVisible,
  } = context;
  const handleToCreateProject = useCallback((event) => {
    const path = findAttributeInEvent(event, 'data-redirect-path');
    history.push(path);
  }, []);
  const handleEditModeOn = useCallback(() => {
    setIsEditMode(true);
    setIsNavVisible(false);
  }, []);
  const handleEditModeOff = useCallback(() => {
    setIsEditMode(false);
    setIsNavVisible(true);
  }, []);
  useEffect(() => (() => {
    setIsEditMode(false);
    setIsNavVisible(true);
  }), []);
  if (isEditMode) {
    return (
      <HeaderContainer>
        <div>調整旅程</div>
        <div className="header-container__icon-wrapper icon-right">
          <i
            role="presentation"
            className="fas fa-check icon-style"
            onClick={handleEditModeOff}
          />
        </div>
      </HeaderContainer>
    );
  }
  return (
    <HeaderContainer>
      <div>{t(`${PAGE_NAME.PLANNING.text}`)}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i role="presentation" className="fas fa-pen icon-style" onClick={handleEditModeOn} />
        <i
          role="presentation"
          className="fas fa-plus icon-style"
          data-redirect-path={PAGE_NAME.CREATE_PROJECT.name}
          onClick={handleToCreateProject}
        />
      </div>
    </HeaderContainer>
  );
};
