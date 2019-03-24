import styled from 'styled-components';

export const SpotlightContainer = styled.div`
  display: grid;
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "header"
    "content"
    "navigation";

  height: 100vh;
  .spot-light__header-container {
    grid-area: header;
    border: 1px solid grey;
  }
  .spot-light__content-container {
    grid-area: content;
    border: 1px solid grey;
  }
  .spot-light__navigation-container {
    grid-area: navigation;
    border: 1px solid grey;
  }
`;
