import React from 'react';
import styled from 'styled-components';
import TravelCard from './components/TravelCard';

const StyledTravelWallPage = styled.div`
  padding: 5px 28px;
`;

const TravelWallPage = () => {
  const cards = new Array(10).fill(0).map((x, index) => index);
  return (
    <StyledTravelWallPage>
      {
        cards.map((card, index) => (
          <TravelCard
            key={card}
            projectId={index}
          />
        ))
      }
    </StyledTravelWallPage>
  );
};

export default TravelWallPage;
