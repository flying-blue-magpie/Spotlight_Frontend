import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'antd/lib/switch';
import { useTranslation } from 'react-i18next';
import { logout } from 'containers/Spotlight/actions';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import FaviBanner from './FaviBanner';
import { StyledSettingPage } from './styles';

const SettingPage = (props) => {
  const { i18n } = useTranslation();
  const [isZhHant, setIsZhHant] = useState(i18n.language === 'zh-Hant');
  const handleLogoutClick = () => {
    props.logout();
    history.push(`/${PAGE_NAME.EXPLORE.name}`);
  };
  const handleOnChange = (checked) => {
    if (checked) {
      setIsZhHant(false);
      i18n.changeLanguage('en');
    } else {
      setIsZhHant(true);
      i18n.changeLanguage('zh-Hant');
    }
  };
  return (
    <StyledSettingPage>
      <FaviBanner />
      <div className="setting-page__general-setting">一般設定</div>
      <div className="setting-page__language">
        {isZhHant ? '繁體中文' : 'English'}
        <Switch onChange={handleOnChange} checked={!isZhHant} />
      </div>
      <div
        role="presentation"
        className="setting-page__logout-button"
        onClick={handleLogoutClick}
      >
       登出
      </div>
    </StyledSettingPage>
  );
};

SettingPage.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, { logout })(SettingPage);
