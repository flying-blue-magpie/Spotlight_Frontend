import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import arrowLeftIconPath from 'assets/arrow_left_icon.svg';
import checkIconPath from 'assets/check_icon.svg';

const Header = ({
  isLoaded,
  handleGoBack,
  handleCheck,
}) => (
  <HeaderContainer>
    <div className="header-container__icon-wrapper icon-left">
      <div role="presentation" onClick={handleGoBack}>
        <img className="icon-style" src={arrowLeftIconPath} alt="" />
      </div>
    </div>
    <div className="header-container__title">景點設定</div>
    {
        isLoaded &&
        <div className="header-container__icon-wrapper icon-right">
          <div role="presentation" onClick={handleCheck}>
            <img className="icon-style" src={checkIconPath} alt="" />
          </div>
        </div>
      }
  </HeaderContainer>
);

Header.propTypes = {
  isLoaded: PropTypes.bool,
  handleGoBack: PropTypes.func,
  handleCheck: PropTypes.func,
};

export default Header;
