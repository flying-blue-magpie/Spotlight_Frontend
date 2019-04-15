import styled from 'styled-components';
import {
  HEIGHT_HEADER,
  HEIGHT_NAVIGATION,
  MAX_WIDTH,
} from 'Styled/Settings/constants';

export const SpotlightContainer = styled.div`
  display: grid;
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  ${(props) => (`
    grid-template-rows:
      ${props.isHeaderVisible ? HEIGHT_HEADER : 0}px
      auto
      ${props.isNavVisible ? HEIGHT_NAVIGATION : 0}px
    ;
  `)}
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
    -webkit-overflow-scrolling: touch;
  }
  .spot-light__navigation-container {
    grid-area: navigation;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    max-width: ${MAX_WIDTH}px;
    bottom: 0;
    background-color: white;
    z-index: 1;
    height: ${HEIGHT_NAVIGATION}px;
  }
`;
