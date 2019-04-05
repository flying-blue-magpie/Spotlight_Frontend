import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Project = styled(Link)`
  display: block;
  padding: 12px;
  border-bottom: solid 1px lightgray;

  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: inherit;
  }
`;
