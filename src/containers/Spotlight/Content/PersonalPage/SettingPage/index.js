import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from 'containers/Spotlight/actions';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import FaviBanner from './FaviBanner';
import { StyledSettingPage } from './styles';

const SettingPage = (props) => {
  const handleLogoutClick = () => {
    props.logout();
    history.push(`/${PAGE_NAME.EXPLORE}`);
  };
  return (
    <StyledSettingPage>
      <FaviBanner />
      <div className="setting-page__general-setting">一般設定</div>
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
