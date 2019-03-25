import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';

import Routes from './Routes';

const HeaderContainer = styled.div`
  background: lightgray;
  ${mixinWidthWrapper()}
`;

const Header = () => (
  <HeaderContainer>
    <Routes />
  </HeaderContainer>
);

export default Header;
