import React from 'react';
import TravelCard from './components/TravelCard';
import { Container } from './Styled';

const TravelWallPage = () => {
  const cards = new Array(10).fill(0).map((x, index) => index);
  return (
    <Container>
      {
        cards.map((card, index) => (
          <TravelCard
            key={card}
            projectId={index}
          />
        ))
      }
    </Container>
  );
};

export default TravelWallPage;
