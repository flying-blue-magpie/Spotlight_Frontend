import React from 'react';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { Container, TravelCard } from './Styled';

const TravelWallPage = () => {
  const cards = new Array(10).fill(0).map((x, index) => index);
  const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING.name}`;
  const defaultDay = 1;

  return (
    <Container>
      {
        cards.map((card, index) => (
          <TravelCard
            key={card}
            to={{
              pathname: `${detailPlanningPagePath}/${index}`,
              search: `?day=${defaultDay}`,
            }}
          />
        ))
      }
    </Container>
  );
};

export default TravelWallPage;
