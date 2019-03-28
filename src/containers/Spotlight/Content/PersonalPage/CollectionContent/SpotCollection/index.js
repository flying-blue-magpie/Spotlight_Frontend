import React from 'react';
import styled from 'styled-components';
import SpotCard from './SpotCard';

const StyledSpotCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px 28px;
`;

const SpotCollection = () => {
  const cards = new Array(11).fill(0).map((x, index) => index);
  return (
    <StyledSpotCollection>
      {
        cards.map((card) => (
          <SpotCard
            key={card}
          />
        ))
      }
    </StyledSpotCollection>
  );
};

export default SpotCollection;
