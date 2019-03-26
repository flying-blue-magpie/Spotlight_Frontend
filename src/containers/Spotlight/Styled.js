import styled from 'styled-components';
import {
  HEIGHT_HEADER,
  HEIGHT_NAVIGATION,
} from 'Styled/Settings/constants';

export const SpotlightContainer = styled.div`
  display: grid;
  grid-template-rows: ${HEIGHT_HEADER}px auto ${HEIGHT_NAVIGATION}px;
  grid-template-areas:
    "header"
    "content"
    "navigation";

  height: 100vh;
  .spot-light__header-container {
    grid-area: header;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
  }
  .spot-light__content-container {
    grid-area: content;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
  }
  .spot-light__navigation-container {
    grid-area: navigation;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
  }
`;
