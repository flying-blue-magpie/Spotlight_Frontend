import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #FAFAFA;
  min-height: 100%;
`;

export const Project = styled(Link)`
  display: block;
  padding: 19px 0 12px;
  margin: 0 15px;
  border-bottom: solid 1px #DFDFDF;

  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: inherit;
  }
`;

export const ProjectName = styled.div`
  color: #333333;
  font-size: 14px;
`;

export const ProjectDate = styled.div`
  color: #AAAAAA;
  font-size: 12px;
`;

export const CreateProjectButton = styled(Link)`
  margin: 0 15px;
  padding: 25px 0;
  border-bottom: solid 1px #DFDFDF;
  font-size: 14px;
  display: flex;
  align-items: center;

  &,
  &:hover,
  &:active,
  &:focus,
  &:visited {
    color: #333333;
  }
`;

export const AddIcon = styled.i`
  font-size: 18px;
  margin-right: 6px;
`;
