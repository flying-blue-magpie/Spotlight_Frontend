import React, { useEffect } from 'react';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { createStructuredSelector } from 'reselect';
import peopleIconPath from 'assets/people_icon_100.svg';
import defaultBackgroundImagePath from 'assets/default_background_3x.png';
import {
  selectUsers,
  selectProjects,
  selectSpots,
} from 'containers/Spotlight/selectors';
import {
  fetchUserById,
  fetchProjectById,
  fetchSpotById,
} from 'containers/Spotlight/actions';

import TravelCard from 'components/TravelCard';

const StyledTravelCard = styled(TravelCard)`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

/* eslint no-shadow: 0 */
const ProjectCard = ({
  spots,
  users,
  projects,
  projectId,
  handleFetchUserById,
  handleFetchSpotById,
  handleFetchProjectById,
}) => {
  useEffect(() => {
    const project = projects.get(String(projectId)) || Map();
    if (!project.size) {
      handleFetchProjectById(projectId);
    } else {
      const spotIds = project.get('plan')
        .map((p) => p.get('arrange'))
        .filter((arrange) => arrange.size)
        .reduce((a, b) => a.concat(b))
        .map((arrange) => arrange.get('spot_id'));
      spotIds.forEach((spotid) => {
        if (!spots.get(spotid.toString())) {
          handleFetchSpotById(spotid);
        }
      });
      const ownerId = project.get('owner');
      if (!users.get(String(ownerId))) {
        handleFetchUserById(ownerId);
      }
    }
  }, [users, projects]);

  const project = projects.get(String(projectId));

  if (!project) {
    return null;
  }

  const spotIds = project.get('plan')
    .map((p) => p.get('arrange'))
    .filter((arrange) => arrange.size)
    .reduce((a, b) => a.concat(b))
    .map((arrange) => arrange.get('spot_id'));
  const spotsPics = spotIds.map((spotId) => spots.get(spotId.toString())).filter((s) => Boolean(s));
  if (!spots.size) {
    return null;
  }
  const ownerId = project.get('owner');
  const user = users.get(String(ownerId));
  const userName = user && (user.get('name') || '在地專業嚮導');
  const imagePath = spotsPics.get(0) ? spotsPics.getIn([0, 'pic', 0]) : defaultBackgroundImagePath;
  const faviconPath = user && (user.get('portrait_link') || peopleIconPath);

  return (
    <StyledTravelCard
      userName={userName}
      cardImageSrc={imagePath}
      userImageSrc={faviconPath}
      userImageTo={`/${PAGE_NAME.TRAVELER.name}/${ownerId}`}
      cardDate={project.get('created_time')}
      cardTitle={project.get('name')}
      cardSubtitle={`${moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日')}-${moment(project.get('start_day'), 'YYYY-MM-DD').add(project.get('tot_days') - 1, 'days').format('YYYY年MM月DD日')} / ${project.get('tot_days')}天`}
      likeNumber={project.get('like_num')}
      isLikeActive
      to={`${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}?day=1`}
    />
  );
};

ProjectCard.propTypes = {
  users: PropTypes.object.isRequired,
  spots: PropTypes.instanceOf(Map),
  projects: PropTypes.object.isRequired,
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  handleFetchUserById: PropTypes.func.isRequired,
  handleFetchProjectById: PropTypes.func,
  handleFetchSpotById: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
  projects: selectProjects(),
  spots: selectSpots(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchUserById: (id) => dispatch(fetchUserById(id)),
  handleFetchProjectById: (id) => dispatch(fetchProjectById(id)),
  handleFetchSpotById: (id) => dispatch(fetchSpotById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCard);
