import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Map } from 'immutable';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { fetchProjects } from 'containers/Spotlight/actions';
import { selectPublicProjects } from 'containers/Spotlight/selectors';
import { Container, TravelCard } from './Styled';

const TravelWallPage = ({
  handleFetchProjects,
  publicProjects,
}) => {
  useEffect(() => {
    handleFetchProjects();
  }, []);

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
          />
        ))
      }
    </Container>
  );
};

TravelWallPage.propTypes = {
  handleFetchProjects: PropTypes.func.isRequired,
  publicProjects: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = createStructuredSelector({
  publicProjects: selectPublicProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchProjects: () => dispatch(fetchProjects({ onlyPublic: true })),
});


export default connect(mapStateToProps, mapDispatchToProps)(TravelWallPage);
