import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFaviBanner = styled(Link)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  .favi-banner__user {
    display: flex;
    align-items: center;
  }
  .favi-banner__name {
    font-size: 16px;
    color: #333333;
    margin-left: 10px;
  }
  .favi-banner__favicon {
    background-image: url(${(props) => props.faviconPath});
    background-size: cover;
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }
  .favi-banner__favicon-right-arrow {
    width: 25px;
    display: flex;
    align-items: center;
    &:before {
      color: #707070;
      content: "\f105";
      font-family: "Font Awesome\ 5 Free";
      font-weight: 900;
      font-size: 25px;
    }
  }
`;
