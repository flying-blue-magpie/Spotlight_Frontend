import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { StyledFaviBanner } from './styles';

const FaviBanner = () => (
  <StyledFaviBanner
    to={`/${PAGE_NAME.SETTING_INFO}`}
  >
    <div className="favi-banner__favicon-container">
      <div className="favi-banner__favicon" />
    </div>
    <div className="favi-banner__favicon-right-arrow" />
  </StyledFaviBanner>
);

export default FaviBanner;
