import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';
import Routes from './Routes';

const ContentContainer = styled.div`
  background: yellow;
  ${mixinWidthWrapper()}
`;

const Content = () => (
  <ContentContainer>
    <Routes />
  </ContentContainer>
);

export default Content;
