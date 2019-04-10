import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  fetchSpotById,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
  selectSpots,
  selectUser,
} from 'containers/Spotlight/selectors';
import DateTabs from './DateTabs';
import DateTimeInfo from './DateTimeInfo';
import Content from './Content';
import {
  DetailPlanningPageContainer,
} from './Styled';

const DetailPlanningPage = (props) => {
  const {
    user,
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

  if (!ownProjects || !ownProjects.size) {
    return <div>尚無任何旅行計劃</div>;
  }
  if (!user) {
    return null;
  }
  const ownProject = ownProjects.find((project) => project.get('proj_id').toString() === projectId);
  if (!ownProject) {
    return <div>找不到該旅行計劃資料</div>;
  }
  const owner = ownProject.get('owner');
  const userId = user.get('user_id');
  const isOwner = userId === owner;

  const name = ownProject.get('name');
  const days = ownProject.get('tot_days');
  const startDay = moment(ownProject.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日');
  const endDay = moment(ownProject.get('start_day'), 'YYYY-MM-DD').add(days - 1, 'days').format('YYYY年MM月DD日');
  const plan = ownProject.get('plan');
  return (
    <DetailPlanningPageContainer>
      {
        isLoading &&
        <Spinner type="opacity" />
      }
      <div className="detail-planning__cover">
        <div className="detail-planning__info_wrapper">
          <div className="detail-planning__cover-title">
            <span>{name}</span>
          </div>
          <div className="detail-planning__cover-period">
            {`${startDay} - ${endDay} / ${days}天`}
          </div>
          <DateTabs projectId={projectId} isOwner={isOwner} days={days} {...props} />
        </div>
      </div>
      <DateTimeInfo isOwner={isOwner} plan={plan} startDay={startDay} {...props} />
      <Content isOwner={isOwner} plan={plan} {...props} />
    </DetailPlanningPageContainer>
  );
};

DetailPlanningPage.propTypes = {
  user: PropTypes.instanceOf(Map),
  match: PropTypes.object,
  ownProjectsMeta: PropTypes.instanceOf(Map),
  ownProjects: PropTypes.instanceOf(List),
  handleFetchOwnProjects: PropTypes.func,
};

DetailPlanningPage.defaultProps = {
  user: Map(),
  match: {},
  ownProjectsMeta: Map(),
  ownProjects: List(),
  handleFetchOwnProjects: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
  spots: selectSpots(),
  user: selectUser(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleFetchSpotById: (spotId) => dispatch(fetchSpotById(spotId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanningPage);
