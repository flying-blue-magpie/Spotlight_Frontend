import React, { useContext, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import history from 'utils/history';
import Context from 'containers/Spotlight/Context';
import { submitUpdateProject } from 'containers/Spotlight/actions';
import {
  HeaderContainer,
  HeaderLeftButtons,
  HeaderButton,
  HeaderTitle,
  HeaderRightButtons,
} from '../Styled';

const { SpotlightContext } = Context;

const AddSpotToProjectPlanPage = ({
  handleSubmitUpdateProject,
  match,
}) => {
  const { setIsNavVisible, updateProject } = useContext(SpotlightContext);

  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
    };
  }, []);

  const handleOnCheckClick = useCallback(() => {
    history.goBack();
    handleSubmitUpdateProject(match.params.projectId, updateProject);
  });

  return (
    <HeaderContainer>
      <HeaderLeftButtons>
        <HeaderButton type="button" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left" />
        </HeaderButton>
      </HeaderLeftButtons>
      <HeaderTitle>
        加到我的行程
      </HeaderTitle>
      <HeaderRightButtons>
        <HeaderButton type="button" onClick={handleOnCheckClick}>
          <i className="fas fa-check" />
        </HeaderButton>
      </HeaderRightButtons>
    </HeaderContainer>
  );
};

AddSpotToProjectPlanPage.propTypes = {
  handleSubmitUpdateProject: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updatedProject) => (
    dispatch(submitUpdateProject(projectId, updatedProject))
  ),
});

export default withRouter(connect(null, mapDispatchToProps)(AddSpotToProjectPlanPage));
