import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';
import { List, Map } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  fetchProjects,
  fetchFavoriteProjectIds,
  likeProject,
  cancelLikeProject,
  fetchSpotById,
} from 'containers/Spotlight/actions';
import {
  selectPublicProjects,
  selectFavoriteProjectIds,
  selectUsers,
  selectSpots,
} from 'containers/Spotlight/selectors';
import { Container, TravelCard } from './Styled';

const TravelWallPage = ({
  handleFetchProjects,
  publicProjects,
  handleFetchFavoriteProjectIds,
  favoriteProjectIds,
  handleLikeProject,
  handleCancelLikeProject,
  users,
  spots,
  handleFetchSpotById,
}) => {
  useEffect(() => {
    handleFetchProjects();
    handleFetchFavoriteProjectIds();
  }, []);

  useEffect(() => {
    publicProjects
      .map((project) => project.getIn(['plan', 0, 'arrange', 0, 'spot_id']))
      .filter((spotId) => !spots.getIn([String(spotId), 'pic']))
      .map((spotId) => handleFetchSpotById(spotId));
  }, [publicProjects]);

  return (
    <Container>
      {
        publicProjects.map((project) => (
          <TravelCard
            key={project.get('proj_id')}
            to={{
              pathname: `/${PAGE_NAME.DETAIL_PLANNING.name}/${project.get('proj_id')}`,
              search: '?day=1',
            }}
            cardTitle={project.get('name')}
            cardDate={project.get('created_time')}
            cardSubtitle={`${moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日')}-${moment(project.get('start_day'), 'YYYY-MM-DD').add(project.get('tot_days') - 1, 'days').format('YYYY年MM月DD日')} / ${project.get('tot_days')}天`}
            likeNumber={project.get('like_num')}
            isLikeActive={favoriteProjectIds.includes(project.get('proj_id'))}
            onLikeClick={() => {
              if (favoriteProjectIds.includes(project.get('proj_id'))) {
                handleCancelLikeProject(project.get('proj_id'));
              } else {
                handleLikeProject(project.get('proj_id'));
              }
            }}
            userName={users.getIn([String(project.get('owner')), 'name'])}
            userImageTo={`/${PAGE_NAME.TRAVELER.name}/${project.get('owner')}`}
            userImageSrc={users.getIn([String(project.get('owner')), 'portrait_link']) || undefined}
            cardImageSrcList={spots.getIn([
              String(project.getIn(['plan', 0, 'arrange', 0, 'spot_id'])),
              'pic',
            ], List()).toJS()}
            reviewScore={project.get('reviewScore')}
            reviewCount={project.get('reviewCount')}
            commentTo={`/${PAGE_NAME.COMMENT.name}/${project.get('proj_id')}`}
            commentCount={project.get('comments').size}
          />
        ))
      }
    </Container>
  );
};

TravelWallPage.propTypes = {
  handleFetchProjects: PropTypes.func.isRequired,
  publicProjects: PropTypes.instanceOf(List).isRequired,
  handleFetchFavoriteProjectIds: PropTypes.func.isRequired,
  favoriteProjectIds: PropTypes.instanceOf(List).isRequired,
  handleLikeProject: PropTypes.func.isRequired,
  handleCancelLikeProject: PropTypes.func.isRequired,
  users: PropTypes.instanceOf(Map).isRequired,
  spots: PropTypes.instanceOf(Map).isRequired,
  handleFetchSpotById: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  publicProjects: selectPublicProjects(),
  favoriteProjectIds: selectFavoriteProjectIds(),
  users: selectUsers(),
  spots: selectSpots(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchProjects: () => dispatch(fetchProjects({ onlyPublic: true })),
  handleFetchFavoriteProjectIds: () => dispatch(fetchFavoriteProjectIds()),
  handleLikeProject: (id) => dispatch(likeProject(id)),
  handleCancelLikeProject: (id) => dispatch(cancelLikeProject(id)),
  handleFetchSpotById: (id) => dispatch(fetchSpotById(id)),
});


export default connect(mapStateToProps, mapDispatchToProps)(TravelWallPage);
