import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map } from 'immutable';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  submitDeleteProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjectById,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import { ProjectTitle, Plan } from './Styled';

const AddSpotToProjectPlanPage = ({
  ownProjectsMeta,
  handleFetchOwnProjects,
  project,
}) => {
  useEffect(() => {
    if (!ownProjectsMeta.get('isLoaded') && !ownProjectsMeta.get('isLoading')) {
      handleFetchOwnProjects();
    }
  }, []);

  if (!ownProjectsMeta.get('isLoaded') || ownProjectsMeta.get('isLoading')) {
    return <Spinner />;
  }

  if (!project) {
    return '沒有這個旅程';
  }

  return (
    <div>
      <ProjectTitle>{project.get('name')}</ProjectTitle>
      {project.get('plan').map((plan, index) => (
        <Plan key={index /* eslint-disable-line react/no-array-index-key */}>
          {`第${index + 1}天`}
          <input type="checkbox" />
        </Plan>
      ))}
    </div>
  );
};

AddSpotToProjectPlanPage.propTypes = {
  ownProjectsMeta: PropTypes.instanceOf(Map).isRequired,
  handleFetchOwnProjects: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Map),
};

const mapStateToProps = (state, ownProps) => ({
  ownProjectsMeta: selectOwnProjectsMeta()(state),
  project: selectOwnProjectById(ownProps.match.params.projectId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleDeleteProject: (projectId) => dispatch(submitDeleteProject(projectId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpotToProjectPlanPage);
