import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import moment from 'moment';
import UserCard from 'components/UserCard';
import { fetchUserById, fetchUserStats, fetchProjects } from 'containers/Spotlight/actions';
import { selectUsers, selectProjectsByUserId } from 'containers/Spotlight/selectors';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  Container,
  Header,
  Cards,
  ProjectCard,
} from './Styled';

const TravelerPage = ({
  match,
  users,
  handleFetchUser,
  handleFetchUserStats,
  handleFetchUserProjects,
  projects,
}) => {
  const { userId } = match.params;
  const user = users.get(userId);
  useEffect(() => {
    if (!user || !user.get('name')) {
      handleFetchUser(userId);
    }
    if (!user || !user.get('stats')) {
      handleFetchUserStats(userId);
    }
    if (!projects || !projects.size) {
      handleFetchUserProjects(userId);
    }
  }, []);

  return (
    <Container>
      <Header>
        <UserCard
          userName={user && user.get('name')}
          publishedProjectsCount={user && user.getIn(['stats', 'published_projs_count'])}
          collectedCount={(user && user.get('stats')) && (
            user.getIn(['stats', 'collected_projs_count']) +
            user.getIn(['stats', 'collected_spots_count'])
          )}
          projectsLikedCount={user && user.getIn(['stats', 'projs_liked_count'])}
          userImage={(user && user.get('protrait_link')) || undefined}
        />
      </Header>
      <Cards>
        {projects && projects.map(((project) => (
          <ProjectCard
            key={project.get('proj_id')}
            to={`/${PAGE_NAME.DETAIL_PLANNING.name}/${project.get('proj_id')}?day=1`}
            title={project.get('name')}
            subtitle={`${moment(project.get('start_day'), 'YYYY-MM-DD').format('YYYY年MM月DD日')}-${moment(project.get('start_day'), 'YYYY-MM-DD').add(project.get('tot_days') - 1, 'days').format('YYYY年MM月DD日')} / ${project.get('tot_days')}天`}
          />
        )))}
      </Cards>
    </Container>
  );
};

TravelerPage.propTypes = {
  match: PropTypes.object.isRequired,
  users: PropTypes.instanceOf(Map),
  handleFetchUser: PropTypes.func.isRequired,
  handleFetchUserStats: PropTypes.func.isRequired,
  handleFetchUserProjects: PropTypes.func.isRequired,
  projects: PropTypes.instanceOf(List),
};

const mapStateToProps = (state, ownProps) => ({
  users: selectUsers()(state),
  projects: selectProjectsByUserId(ownProps.match.params.userId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchUser: (userId) => dispatch(fetchUserById(userId)),
  handleFetchUserStats: (userId) => dispatch(fetchUserStats(userId)),
  handleFetchUserProjects: (userId) => dispatch(fetchProjects({ owner: userId, onlyPublic: true })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelerPage);
