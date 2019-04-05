import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, List } from 'immutable';
import { withRouter } from 'react-router';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  submitDeleteProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import { Project } from './Styled';

const formatDate = (date) => (
  `${date.getFullYear()}年${date.getMonth()}月${date.getDate()}日`
);
const addDaysToDate = (date, days) => (
  date.setDate(date.getDate() + days)
);

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
    <div>
      <div>
        {ownProjects.map((project) => (
          <Project
            key={project.get('proj_id')}
            to={`${location.pathname}/${project.get('proj_id')}`}
          >
            <div>{project.get('name')}</div>
            <div>
              {formatDate(new Date(project.get('start_day')))}
              {' - '}
              {formatDate(new Date(addDaysToDate(
                new Date(project.get('start_day')),
                project.get('tot_days'),
              )))}
              {' / '}
              {project.get('tot_days')}
              天
            </div>
          </Project>
        ))}
      </div>
    </div>
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
