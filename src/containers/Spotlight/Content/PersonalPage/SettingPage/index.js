import React from 'react';
import FaviBanner from './FaviBanner';
import { StyledSettingPage } from './styles';

const SettingPage = () => (
  <StyledSettingPage>
    <FaviBanner />
    <div className="setting-page__general-setting">一般設定</div>
  </StyledSettingPage>
);

export default SettingPage;
