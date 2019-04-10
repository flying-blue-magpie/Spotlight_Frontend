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
  display: block;
`;

const ProjectCollection = ({
  favoriteProjectIds,
}) => {
  const cards = favoriteProjectIds.map((value) => value);
  return (
    <StyledProjectCollection>
      {
        cards.map((card) => (
          <ProjectCard
            key={card}
            projectId={card}
          />
        ))
      }
    </StyledProjectCollection>
  );
};

ProjectCollection.propTypes = {
  favoriteProjectIds: PropTypes.instanceOf(List),
};

const mapStateToProps = createStructuredSelector({
  favoriteProjectIds: selectFavoriteProjectIds(),
});

export default connect(mapStateToProps)(ProjectCollection);
