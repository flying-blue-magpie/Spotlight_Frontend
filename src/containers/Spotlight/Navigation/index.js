import React from 'react';
import styled from 'styled-components';
import {
  PAGE_NAME,
  mixinWidthWrapper,
} from 'Styled/Settings/constants';
import NavTab from 'components/NavTab';
import {
  NavIcon,
} from 'containers/Spotlight/constants';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.16);
  ${mixinWidthWrapper()}
`;

const Navigation = () => (
  <NavigationContainer>
    <NavTab page={PAGE_NAME.EXPLORE} iconPath={NavIcon.explore} />
    <NavTab page={PAGE_NAME.PLANNING} iconPath={NavIcon.planning} />
    <NavTab page={PAGE_NAME.ARTICLES} iconPath={NavIcon.articles} />
    <NavTab page={PAGE_NAME.TRAVEL_WALL} iconPath={NavIcon.travelWall} />
    <NavTab page={PAGE_NAME.PERSONAL_PAGE} iconPath={NavIcon.personal} />
  </NavigationContainer>
);

export default Navigation;
