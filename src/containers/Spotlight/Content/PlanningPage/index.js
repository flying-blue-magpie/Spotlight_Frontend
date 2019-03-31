import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { List } from 'immutable';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import {
  fetchOwnProjects,
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
  // ownProjects,
  handleFetchOwnProjects,
}) => {
  const isLoaded = ownProjectsMeta.get('isLoaded');
  const isLoading = ownProjectsMeta.get('isLoading');
  const arr = new Array(10).fill(0).map((x, index) => index);
  useEffect(() => {
    if (!isLoaded) {
      handleFetchOwnProjects();
    }
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Container>
      {
        arr.map((index) => (
          <ProjectCard
            key={index}
            id={index}
            title="台北購物之旅"
          />
        ))
      }
    </Container>
  );
};

PlanningPage.propTypes = {
  ownProjectsMeta: PropTypes.object,
  // ownProjects: PropTypes.instanceOf(List),
  handleFetchOwnProjects: PropTypes.func,
};

PlanningPage.defaultProps = {
  ownProjectsMeta: null,
  // ownProjects: List(),
  handleFetchOwnProjects: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlanningPage));
