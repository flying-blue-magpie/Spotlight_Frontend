import styled from 'styled-components';
import headerImage from './header-image.png';

export const Container = styled.div`
  min-height: 100%;
  background-color: #FAFAFA;
`;

export const Header = styled.div`
  background-image: url(${headerImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 15px 20px;
`;
