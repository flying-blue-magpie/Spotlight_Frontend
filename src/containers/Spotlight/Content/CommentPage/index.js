import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Spinner from 'components/Spinner';
import { fetchProjects } from 'containers/Spotlight/actions';
import { selectProjects } from 'containers/Spotlight/selectors';

import {
  Container,
  UserImage,
  UserName,
  Comment,
  Row,
} from './Styled';

const CommentPage = ({
  match,
  handleFetchProjects,
  projects,
}) => {
  const { projectId } = match.params;
  const comments = projects.getIn([projectId, 'comments']);

  useEffect(() => {
    if (!comments) {
      handleFetchProjects();
    }
  }, []);

  if (!comments) {
    return <Spinner />;
  }

  return (
    <Container>
      {comments.map((comment, i) => (
        <Row key={i}>
          <UserImage src={comment.get('userImage')} alt={comment.get('userName')} />
          <div>
            <UserName>{comment.get('userName')}</UserName>
            <Comment>{comment.get('comment')}</Comment>
          </div>
        </Row>
      ))}
    </Container>
  );
};

CommentPage.propTypes = {
  match: PropTypes.object.isRequired,
  handleFetchProjects: PropTypes.func.isRequired,
  projects: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchProjects: () => dispatch(fetchProjects()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentPage);
