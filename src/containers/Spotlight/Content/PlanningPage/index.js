import React from 'react';
import styled from 'styled-components';
import ProjectCard from './components/ProjectCard';

const Container = styled.div`
  padding: 0px 28px;
  overflow: scroll;
`;

const PlanningPage = () => {
  const arr = new Array(10).fill(0).map((x, index) => index);
  return (
    <Container>
      {
        arr.map((index) => (
          <ProjectCard
            key={index}
            id={index}
            title="台北購物之旅"
          />
        ))
      }
    </Container>
  );
};

export default PlanningPage;
