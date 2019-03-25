import React from 'react';
import styled from 'styled-components';
import ProjectCard from './components/ProjectCard';

const Container = styled.div`
  padding: 0px 28px;
  overflow: scroll;
`;

const PlanningPage = () => (
  <Container>
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
    <ProjectCard
      title={'台北購物之旅'}
    />
  </Container>
);

export default PlanningPage;
