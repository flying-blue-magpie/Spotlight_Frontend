import React from 'react';
import styled from 'styled-components';
import {
  mixinWidthWrapper,
} from 'Styled/Settings/constants';
import Routes from './Routes';

const ContentContainer = styled.div`
  ${mixinWidthWrapper()}
`;

const Content = () => (
  <ContentContainer>
    <Routes />
  </ContentContainer>
);

export default Content;
