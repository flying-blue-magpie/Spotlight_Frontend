import React, { useCallback } from 'react';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';

import arrowLeftIconPath from 'assets/arrow_left_icon.svg';
import checkIconPath from 'assets/check_icon.svg';


const UpdateSpotCardPage = () => {
  const handleOnGoBack = useCallback(() => {
    history.goBack();
  }, []);

  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <div role="presentation" onClick={handleOnGoBack}>
          <img className="icon-style" src={arrowLeftIconPath} alt="" />
        </div>
      </div>
      <div>{PAGE_NAME.SETTING_SPOT_CARD.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <div role="presentation" onClick={() => console.log('check')}>
          <img className="icon-style" src={checkIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

export default UpdateSpotCardPage;
