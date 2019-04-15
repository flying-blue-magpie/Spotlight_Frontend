import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PAGE_NAME } from 'Styled/Settings/constants';
import moment from 'moment';
import history from 'utils/history';
import peopleIconPath from 'assets/people_icon_100.svg';

import Spinner from 'components/Spinner';
import {
  fetchOwnProjects,
  fetchSpotById,
  fetchProjectById,
  fetchUserById,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
  selectOwnProjectsMeta,
  selectSpots,
  selectUser,
  selectUsers,
  selectProjects,
} from 'containers/Spotlight/selectors';
import DateTabs from './DateTabs';
import DateTimeInfo from './DateTimeInfo';
import Content from './Content';
import {
  DetailPlanningPageContainer,
} from './Styled';
import boraImage from './default-cover-images/bora.jpg';
import columbiaImage from './default-cover-images/british-columbia.jpg';
import fernImage from './default-cover-images/fern.jpg';
import mountainImage from './default-cover-images/mountain.jpg';
import skyImage from './default-cover-images/sky.jpg';
import sunrise1Image from './default-cover-images/sunrise-1.jpg';
import sunrise2Image from './default-cover-images/sunrise-2.jpg';
import taiwan1Image from './default-cover-images/taiwan-1.jpg';
import taiwan2Image from './default-cover-images/taiwan-2.jpg';
import southPeakImage from './default-cover-images/the-odd-knight-of-the-south-peak.jpg';

const coverImagePaths = [
  boraImage,
  columbiaImage,
  fernImage,
  mountainImage,
  skyImage,
  sunrise1Image,
  sunrise2Image,
  taiwan1Image,
  taiwan2Image,
  southPeakImage,
];

const DetailPlanningPage = (props) => {
  const {
    user,
    users,
    match,
    ownProjectsMeta,
    projects,
    handleFetchProjectById,
    handleFetchUser,
  } = props;
  const {
    params: {
      projectId,
    },
  } = match;
  const isLoading = ownProjectsMeta.get('isLoading');
  useEffect(() => {
    if (!projects.get(projectId)) {
      handleFetchProjectById(projectId);
    }
  }, [projectId]);

  const owner = projects.getIn([projectId, 'owner']);
  useEffect(() => {
    if (owner && !users.get(String(owner))) {
      handleFetchUser(owner);
    }
  }, [owner, users]);

  const [coverImage, serCoverImage] = useState(null);
  if (coverImage === null) {
    serCoverImage(coverImagePaths[Math.floor(Math.random() * (coverImagePaths.length - 1))]);
  }

  if (!projects || !projects.size) {
    return <div>尚無任何旅行計劃</div>;
  }
  if (!user) {
    return null;
  }

  const project = projects.get(projectId);
  if (!project) {
    return <div>找不到該旅行計劃資料</div>;
  }

  const userId = user.get('user_id');
  const isOwner = userId === owner;

  const handleGoToTravelerPage = () => {
    const travelerPagePath = `/${PAGE_NAME.TRAVELER.name}/${owner}`;
    history.push(travelerPagePath);
  };

  const name = project.get('name');
  const days = project.get('plan').size;
  const startDay = moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日');
  const endDay = moment(project.get('start_day'), 'YYYY-MM-DD').add(days - 1, 'days').format('YYYY年MM月DD日');
  const plan = project.get('plan');
  const faviconPath = users.getIn([owner.toString(), 'portrait_link']) || peopleIconPath;

  return (
    <DetailPlanningPageContainer
      faviconPath={faviconPath}
      coverImagePath={coverImage}
    >
      {
        isLoading &&
        <Spinner type="opacity" />
      }
      <div className="detail-planning__cover">
        <div className="detail-planning__info_wrapper">
          <div role="presentation" className="detail-planning__info_direction_wrapper" onClick={handleGoToTravelerPage}>
            <img src="" className="detail-planning__favicon" alt="" />
            <div className="detail-planning__info_title_wrapper">
              <div className="detail-planning__cover-title">
                <span>{name}</span>
              </div>
              <div className="detail-planning__cover-period">
                {`${startDay} - ${endDay} / ${days}天`}
              </div>
            </div>
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
  users: PropTypes.instanceOf(Map).isRequired,
  match: PropTypes.object,
  ownProjectsMeta: PropTypes.instanceOf(Map),
  projects: PropTypes.instanceOf(Map).isRequired,
  handleFetchOwnProjects: PropTypes.func,
  handleFetchProjectById: PropTypes.func,
  handleFetchUser: PropTypes.func,
};

DetailPlanningPage.defaultProps = {
  user: Map(),
  match: {},
  ownProjectsMeta: Map(),
  handleFetchOwnProjects: () => { },
  handleFetchProjectById: () => { },
  handleFetchUser: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjectsMeta: selectOwnProjectsMeta(),
  ownProjects: selectOwnProjects(),
  projects: selectProjects(),
  spots: selectSpots(),
  user: selectUser(),
  users: selectUsers(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchOwnProjects: () => dispatch(fetchOwnProjects()),
  handleFetchSpotById: (spotId) => dispatch(fetchSpotById(spotId)),
  handleFetchProjectById: (id) => dispatch(fetchProjectById(id)),
  handleFetchUser: (userId) => dispatch(fetchUserById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanningPage);
