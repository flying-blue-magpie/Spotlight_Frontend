import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';

const HeaderContainer = styled.div`
  background: yellow;
  ${mixinWidthWrapper()}
`;

const Header = () => (
  <HeaderContainer>
    Header
  </HeaderContainer>
);

export default Header;
