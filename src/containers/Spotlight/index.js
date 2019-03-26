import React from 'react';
import SpotlightContext from './Context';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import {
  SpotlightContainer,
} from './Styled';

const {
  SpotlightProvider,
} = SpotlightContext;

const Spotlight = () => (
  <SpotlightProvider>
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
  </SpotlightProvider>
);

export default Spotlight;
