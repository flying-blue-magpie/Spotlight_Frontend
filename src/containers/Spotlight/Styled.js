import styled from 'styled-components';
import {
  HEIGHT_HEADER,
  HEIGHT_NAVIGATION,
} from 'Styled/Settings/constants';

export const SpotlightContainer = styled.div`
  display: grid;
  ${(props) => (props.isNavVisible
    ? `grid-template-rows: ${HEIGHT_HEADER}px auto ${HEIGHT_NAVIGATION}px;`
    : `grid-template-rows: ${HEIGHT_HEADER}px auto 0px`)}
  grid-template-areas:
    "header"
    "content"
    "navigation";

  height: 100vh;
  .spot-light__header-container {
    grid-area: header;
    display: flex;
    justify-content: center;
  }
  .spot-light__content-container {
    grid-area: content;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
  }
  .spot-light__navigation-container {
    grid-area: navigation;
    display: flex;
    justify-content: center;
    z-index: 1;
  }
`;
