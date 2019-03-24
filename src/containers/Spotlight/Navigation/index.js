import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';

const NavigationContainer = styled.div`
  background: yellow;
  ${mixinWidthWrapper()}
`;

const Navigation = () => (
  <NavigationContainer>
    Navigation
  </NavigationContainer>
);

export default Navigation;
