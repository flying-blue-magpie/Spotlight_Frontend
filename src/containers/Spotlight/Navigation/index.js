import React from 'react';
import styled from 'styled-components';
import {
  PAGE_NAME,
  mixinWidthWrapper,
} from 'Styled/Settings/constants';
import NavTab from 'components/NavTab';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  ${mixinWidthWrapper()}
`;

const Navigation = () => (
  <NavigationContainer>
    <NavTab title={PAGE_NAME.EXPLORE} />
    <NavTab title={PAGE_NAME.PLANNING} />
    <NavTab title={PAGE_NAME.TRAVEL_WALL} />
    <NavTab title={PAGE_NAME.PERSONAL_PAGE} />
  </NavigationContainer>
);

export default Navigation;
