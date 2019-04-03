import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import {
  fetchOwnProjects,
  submitDeleteProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import Spinner from 'components/Spinner';
import ProjectCard from './components/ProjectCard';

const Container = styled.div`
  padding: 0px 28px;
  overflow: scroll;
`;

const PlanningPage = ({
  ownProjectsMeta,
  ownProjects,
  handleFetchOwnProjects,
  handleDeleteProject,
}) => {
  const isLoaded = ownProjectsMeta.get('isLoaded');
  const isLoading = ownProjectsMeta.get('isLoading');
  useEffect(() => {
    if (!isLoaded) {
      handleFetchOwnProjects();
    }
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (!ownProjects.size) {
    return <div>尚無任何旅行計劃</div>;
  }
  return (
    <Container>
      {
        ownProjects.map((project) => (
          <ProjectCard
            key={project.get('proj_id')}
            project={project}
            handleDeleteProject={handleDeleteProject}
          />
        ))
      }
    </Container>
  );
};

PlanningPage.propTypes = {
  ownProjectsMeta: PropTypes.object,
  ownProjects: PropTypes.instanceOf(List),
  handleFetchOwnProjects: PropTypes.func,
  handleDeleteProject: PropTypes.func,
};

PlanningPage.defaultProps = {
  ownProjectsMeta: null,
  ownProjects: List(),
  handleFetchOwnProjects: () => { },
  handleDeleteProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleDeleteProject: (projectId) => dispatch(submitDeleteProject(projectId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanningPage));
