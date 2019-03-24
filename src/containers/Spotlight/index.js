import React from 'react';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import {
  SpotlightContainer,
} from './Styled';

const Spotlight = () => (
  <SpotlightContainer>
    <div className="spot-light__header-container">
      <Header />
    </div>
    <div className="spot-light__content-container">
      <Content />
    </div>
    <div className="spot-light__navigation-container">
      <Navigation />
    </div>
  </SpotlightContainer>
);

export default Spotlight;
