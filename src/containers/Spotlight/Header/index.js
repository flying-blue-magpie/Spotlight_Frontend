import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';

import Routes from './Routes';

const HeaderContainer = styled.div`
  background: ${(props) => props.theme.mainColor};
  font-weight: 600;
  color: rgba(51, 51, 51, 1);
  ${mixinWidthWrapper()}
`;

const Header = () => (
  <HeaderContainer>
    <Routes />
  </HeaderContainer>
);

export default Header;
