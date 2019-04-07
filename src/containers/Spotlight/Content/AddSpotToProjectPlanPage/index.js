import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Map, List } from 'immutable';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  submitDeleteProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjectById,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import Context from 'containers/Spotlight/Context';
import {
  ProjectTitle,
  Plan,
  Container,
} from './Styled';

const DEFAULT_SPOT_DURATION = 60;

const { SpotlightContext } = Context;

const AddSpotToProjectPlanPage = ({
  ownProjectsMeta,
  handleFetchOwnProjects,
  project,
  match,
}) => {
  useEffect(() => {
    if (!ownProjectsMeta.get('isLoaded') && !ownProjectsMeta.get('isLoading')) {
      handleFetchOwnProjects();
    }
  }, []);

  const { setUpdateProject } = useContext(SpotlightContext);
  const [daySelection, setDaySelection] = useState(List());

  useEffect(() => {
    if (project) {
      setUpdateProject(project.update('plan', (plan) => plan.map((day, index) => {
        const { spotId } = match.params;
        const arrange = day.get('arrange');
        const isSpotAlreadyArranged = arrange.filter((spotArrange) => spotArrange.get('spot_id') === spotId).size > 0;

        if (!isSpotAlreadyArranged && daySelection.get(index)) {
          return day.set(
            'arrange',
            arrange.push(Map({ spot_id: spotId, during: DEFAULT_SPOT_DURATION })),
          );
        }
        return day;
      })));
    }

    return () => {
      setUpdateProject(Map());
    };
  }, [daySelection]);

  if (!ownProjectsMeta.get('isLoaded') || ownProjectsMeta.get('isLoading')) {
    return <Spinner />;
  }

  if (!project) {
    return '沒有這個旅程';
  }

  return (
    <Container>
      <ProjectTitle>{project.get('name')}</ProjectTitle>
      {project.get('plan').map((_plan, index) => (
        <Plan key={index /* eslint-disable-line react/no-array-index-key */}>
          {`第${index + 1}天`}
          <input
            type="checkbox"
            checked={daySelection.get(index) || false}
            onChange={(event) => (
              setDaySelection(daySelection.set(index, event.currentTarget.checked))
            )}
          />
        </Plan>
      ))}
    </Container>
  );
};

AddSpotToProjectPlanPage.propTypes = {
  ownProjectsMeta: PropTypes.instanceOf(Map).isRequired,
  handleFetchOwnProjects: PropTypes.func.isRequired,
  project: PropTypes.instanceOf(Map),
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  ownProjectsMeta: selectOwnProjectsMeta()(state),
  project: selectOwnProjectById(ownProps.match.params.projectId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleDeleteProject: (projectId) => dispatch(submitDeleteProject(projectId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddSpotToProjectPlanPage));
