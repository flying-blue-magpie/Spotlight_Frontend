import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
} from 'containers/Spotlight/selectors';
import DateTabs from './DateTabs';
import DateTimeInfo from './DateTimeInfo';
import Content from './Content';
import {
  DetailPlanningPageContainer,
} from './Styled';

const DetailPlanningPage = (props) => {
  const {
    match,
    ownProjectsMeta,
    ownProjects,
    handleFetchOwnProjects,
  } = props;
  const {
    params: {
      projectId,
    },
  } = match;
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
  const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
  if (!ownProject) {
    return <div>找不到該旅行計劃資料</div>;
  }
  const name = ownProject.get('name');
  const days = ownProject.get('tot_days');
  const startDay = moment(ownProject.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日');
  const endDay = moment(ownProject.get('start_day'), 'YYYY-MM-DD').add(days - 1, 'days').format('YYYY年MM月DD日');
  return (
    <DetailPlanningPageContainer>
      <div className="detail-planning__cover">
        <div className="detail-planning__cover-title">
          <span>{name}</span>
          <i className="fas fa-pen icon__pen" />
        </div>
        <div className="detail-planning__cover-period">
          {`${startDay} - ${endDay} / ${days}天`}
        </div>
      </div>
      <DateTabs days={days} {...props} />
      <DateTimeInfo startDay={startDay} {...props} />
      <Content {...props} />
    </DetailPlanningPageContainer>
  );
};

DetailPlanningPage.propTypes = {
  match: PropTypes.object,
  ownProjectsMeta: PropTypes.object,
  ownProjects: PropTypes.instanceOf(List),
  handleFetchOwnProjects: PropTypes.func,
};

DetailPlanningPage.defaultProps = {
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanningPage);
