import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';
import {
  findAttributeInEvent,
} from 'utils/event';
import history from 'utils/history';

const NavigationContainer = styled.div`
  background: yellow;
  ${mixinWidthWrapper()}
`;

const Navigation = () => {
  const handleRedirect = (event) => {
    const pagePath = findAttributeInEvent(event, 'data-page');
    history.push(pagePath);
  }
  return (
    <NavigationContainer>
      <button data-page={'1'} onClick={handleRedirect}>Page1</button>
      <button data-page={'2'} onClick={handleRedirect}>Page2</button>
    </NavigationContainer>
  );
};

export default Navigation;
