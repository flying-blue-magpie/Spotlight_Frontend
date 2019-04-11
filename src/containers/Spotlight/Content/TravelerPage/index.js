import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import UserCard from 'components/UserCard';
import { fetchUserById, fetchUserStats } from 'containers/Spotlight/actions';
import { selectUsers } from 'containers/Spotlight/selectors';
import { Container, Header } from './Styled';

const TravelerPage = ({
  match,
  users,
  handleFetchUser,
  handleFetchUserStats,
}) => {
  const { userId } = match.params;
  const user = users.get(userId);
  useEffect(() => {
    if (!user) {
      handleFetchUser(userId);
      handleFetchUserStats(userId);
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
        />
      </Header>
      Traveler Page:
      {match.params.userId}
    </Container>
  );
};

TravelerPage.propTypes = {
  match: PropTypes.object.isRequired,
  users: PropTypes.instanceOf(Map),
  handleFetchUser: PropTypes.func.isRequired,
  handleFetchUserStats: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  users: selectUsers(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchUser: (userId) => dispatch(fetchUserById(userId)),
  handleFetchUserStats: (userId) => dispatch(fetchUserStats(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TravelerPage);
