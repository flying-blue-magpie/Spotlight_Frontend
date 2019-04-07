import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, List } from 'immutable';
import { withRouter } from 'react-router';
import moment from 'moment';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  submitDeleteProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import {
  Container,
  Project,
  ProjectName,
  ProjectDate,
} from './Styled';

const AddSpotToProjectPage = ({
  ownProjectsMeta,
  handleFetchOwnProjects,
  ownProjects,
  location,
}) => {
  useEffect(() => {
    if (!ownProjectsMeta.get('isLoaded')) {
      handleFetchOwnProjects();
    }
  }, []);

  if (ownProjectsMeta.get('isLoading')) {
    return <Spinner />;
  }

  return (
    <Container>
      {ownProjects.map((project) => (
        <Project
          key={project.get('proj_id')}
          to={`${location.pathname}/${project.get('proj_id')}`}
        >
          <ProjectName>{project.get('name')}</ProjectName>
          <ProjectDate>
            {moment(project.get('start_day'), 'YYYY-MM-DD')
              .format('YYYY年MM月DD日')
            }
            -
            {moment(project.get('start_day'), 'YYYY-MM-DD')
              .add(project.get('tot_days') - 1, 'days')
              .format('YYYY年MM月DD日')
            }
            {' / '}
            {project.get('tot_days')}
            天
          </ProjectDate>
        </Project>
      ))}
    </Container>
  );
};

AddSpotToProjectPage.propTypes = {
  ownProjectsMeta: PropTypes.instanceOf(Map).isRequired,
  handleFetchOwnProjects: PropTypes.func.isRequired,
  ownProjects: PropTypes.instanceOf(List).isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleDeleteProject: (projectId) => dispatch(submitDeleteProject(projectId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSpotToProjectPage));
