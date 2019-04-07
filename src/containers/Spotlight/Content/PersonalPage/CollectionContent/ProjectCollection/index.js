import React from 'react';
import { connect } from 'react-redux';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import {
  selectFavoriteProjectIds,
} from 'containers/Spotlight/selectors';

import ProjectCard from './ProjectCard';

const StyledProjectCollection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 10px 28px;
`;

const ProjectCollection = ({
  favoriteProjectIds,
  handleOnClick,
}) => {
  const cards = favoriteProjectIds.map((value) => value);
  return (
    <StyledProjectCollection>
      {
        cards.map((card) => (
          <ProjectCard
            key={card}
            projectId={card}
            handleOnClick={handleOnClick}
          />
        ))
      }
    </StyledProjectCollection>
  );
};

ProjectCollection.propTypes = {
  favoriteProjectIds: PropTypes.instanceOf(List),
  handleOnClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  favoriteProjectIds: selectFavoriteProjectIds(),
});

export default connect(mapStateToProps)(ProjectCollection);
