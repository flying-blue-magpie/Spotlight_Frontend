import React from 'react';
import {
  SpotlightContainer,
} from './Styled';

const Spotlight = () => (
  <SpotlightContainer>
    <div className="spot-light__header-container">Header</div>
    <div className="spot-light__content-container">Content</div>
    <div className="spot-light__navigation-container">Footer</div>
  </SpotlightContainer>
);

export default Spotlight;
