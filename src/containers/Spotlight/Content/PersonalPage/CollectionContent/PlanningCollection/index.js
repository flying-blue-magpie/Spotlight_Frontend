import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PlanningCard from './PlanningCard';

const StyledPlanningCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px 28px;
`;

const PlanningCollection = ({
  handleOnClick,
}) => {
  const cards = new Array(11).fill(0).map((x, index) => index);
  return (
    <StyledPlanningCollection>
      {
        cards.map((card) => (
          <PlanningCard
            key={card}
            planningId={card}
            handleOnClick={handleOnClick}
          />
        ))
      }
    </StyledPlanningCollection>
  );
};

PlanningCollection.propTypes = {
  handleOnClick: PropTypes.func,
};

PlanningCollection.propTypes = {
  handleOnClick: () => { },
};

export default PlanningCollection;
