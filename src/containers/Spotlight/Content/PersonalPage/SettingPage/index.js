import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Switch from 'antd/lib/switch';
import { logout } from 'containers/Spotlight/actions';
import history from 'utils/history';
import { useTranslation } from 'react-i18next';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Context from 'containers/Spotlight/Context';
import FaviBanner from './FaviBanner';
import { StyledSettingPage } from './styles';

const { SpotlightContext } = Context;

const SettingPage = (props) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(SpotlightContext);
  const handleLogoutClick = () => {
    props.logout();
    history.push(`/${PAGE_NAME.EXPLORE.name}`);
  };
  const handleOnChange = (checked) => {
    if (checked) {
      setLanguage('en');
    } else {
      setLanguage('zh-Hant');
    }
  };
  return (
    <StyledSettingPage>
      <FaviBanner />
      <div className="setting-page__general-setting">{t('一般設定')}</div>
      <div className="setting-page__settings">
        <div className="setting-page__language setting-page__setting">
          {language === 'zh-Hant' ? '繁體中文' : 'English'}
          <Switch onChange={handleOnChange} checked={language === 'en'} />
        </div>
        <div
          role="presentation"
          className="setting-page__logout-button setting-page__setting"
          onClick={handleLogoutClick}
        >
          {t('登出')}
        </div>
      </div>
    </StyledSettingPage>
  );
};

SettingPage.propTypes = {
  logout: PropTypes.func,
};

export default connect(null, { logout })(SettingPage);
