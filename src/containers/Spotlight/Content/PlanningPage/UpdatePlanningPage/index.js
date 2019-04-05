import React, { useEffect, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import styled from 'styled-components';
import InputBox from 'components/InputBox';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import Spinner from 'components/Spinner';

import {
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import {
  fetchOwnProjects,
} from 'containers/Spotlight/actions';
import Context from 'containers/Spotlight/Context';

const { SpotlightContext } = Context;

const UpdatePlanningPageWrapper = styled.div`
  padding: 0px 15px;
`;

const UpdatePlanningPage = ({
  match,
  ownProjectsMeta,
  ownProjects,
  handleFetchOwnProjects,
}) => {
  const context = useContext(SpotlightContext);
  const {
    setUpdateProject,
  } = context;
  const {
    params: {
      projectId,
    },
  } = match;
  const handleOnNameChange = useCallback((event) => {
    const name = event.target.value;
    setUpdateProject((updateProject) => updateProject.set('name', name));
  }, []);
  const handleOnDateChange = useCallback((event) => {
    const starDay = event.target.value;
    setUpdateProject((data) => data.set('start_day', moment(starDay).format('YYYY/MM/DD 00:00:00')));
  }, []);

  const isLoaded = ownProjectsMeta.get('isLoaded');
  const isLoading = ownProjectsMeta.get('isLoading');
  useEffect(() => {
    setUpdateProject(Map());
    if (!isLoaded) {
      handleFetchOwnProjects();
    }
    return () => {
      setUpdateProject(Map());
    };
  }, []);
  if (isLoading) {
    return <Spinner />;
  }
  if (!ownProjects.size) {
    return <div>尚無任何旅行計劃</div>;
  }
  const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
  if (!ownProject) {
    return <div>找不到該旅行計劃資料</div>;
  }
  const name = ownProject.get('name');
  const startDay = moment(ownProject.get('start_day'), 'YYYY-MM-DD').format('YYYY-MM-DD'); // defaultValue format must be YYYY-MM-DD
  return (
    <UpdatePlanningPageWrapper>
      <InputBox
        title="旅程名稱"
        defaultValue={name}
        handleOnChange={handleOnNameChange}
      />
      <InputBox
        title="出發日期"
        inputType="date"
        defaultValue={startDay}
        handleOnChange={handleOnDateChange}
      />
    </UpdatePlanningPageWrapper>
  );
};


UpdatePlanningPage.propTypes = {
  match: PropTypes.object,
  ownProjectsMeta: PropTypes.object,
  ownProjects: PropTypes.instanceOf(List),
  handleFetchOwnProjects: PropTypes.func,
};

UpdatePlanningPage.defaultProps = {
  match: {},
  ownProjectsMeta: null,
  ownProjects: List(),
  handleFetchOwnProjects: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlanningPage);
