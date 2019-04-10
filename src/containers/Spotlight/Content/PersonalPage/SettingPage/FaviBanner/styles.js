import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { GRAY } from 'Styled/Settings/colors';

export const StyledFaviBanner = styled(Link)`
  height: 100px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  .favi-banner__favicon-container {
    height: 100px;
    width: 100px;
    padding: 15px;
    .favi-banner__favicon {
      background-image: url(${(props) => props.faviconPath});
      background-size: cover;
      height: 100%;
      width: 100%;
      border-radius: 50%;
    }
  }
  .favi-banner__favicon-right-arrow {
    width: 25px;
    display: flex;
    align-items: center;
    &:before {
      color: ${GRAY};
      content: "\f105";
      font-family: "Font Awesome\ 5 Free";
      font-weight: 900;
      font-size 50px;
    }
  }
`;
