import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { Map, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import {
  selectUser,
  selectProjects,
} from 'containers/Spotlight/selectors';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';
import uploadTravelWallIconPath from 'assets/upload_travel_wall_icon.svg';
import message from 'antd/lib/message';
import Modal from 'components/Modal';
import ModalContent from './ModalContent';

const { SpotlightContext } = Context;

const modalStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const DetailPlanningPage = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const context = useContext(SpotlightContext);
  const {
    setIsNavVisible,
  } = context;
  const {
    user,
    match,
    // ownProjects,
    projects,
    handleSubmitUpdateProject,
  } = props;
  const { projectId } = match.params;
  if (!projects) {
    return null;
  }
  const project = projects.find((proj) => proj.get('proj_id').toString() === projectId);
  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
    };
  }, []);
  const handleGoBackToPlanning = useCallback(() => {
    history.goBack();
  }, []);
  const handleGoToUpdatePlanningPage = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    history.replace({
      pathname: `/${PAGE_NAME.UPDATE_PLANNING.name}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  const handleUploadToTravelWall = useCallback(() => {
    if (!project) {
      return;
    }
    const hasPublic = project.get('is_public');
    if (hasPublic) {
      message.info('已經上傳至旅遊牆');
      return;
    }
    setIsModalVisible(true);
  }, [projects]);
  const handleOnOk = useCallback(() => {
    const updatedProject = fromJS({ is_public: true });
    handleSubmitUpdateProject(projectId, updatedProject);
    setIsModalVisible(false);
  }, []);
  const handleOnCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  if (!project || !user) {
    return null;
  }
  const owner = project.get('owner');
  const userId = user.get('user_id');
  const isOwner = userId === owner;

  return (
    <>
      <HeaderContainer>
        <div className="header-container__icon-wrapper icon-left">
          <i role="presentation" className="fas fa-arrow-left icon-style" onClick={handleGoBackToPlanning} />
        </div>
        <div>{PAGE_NAME.DETAIL_PLANNING.text}</div>
        {
          isOwner &&
          <div className="header-container__icon-wrapper icon-right">
            <i role="presentation" className="fas fa-pen icon-style" onClick={handleGoToUpdatePlanningPage} />
            <div role="presentation" onClick={handleUploadToTravelWall}>
              <img src={uploadTravelWallIconPath} className="icon-style" alt="" />
            </div>
          </div>
        }
      </HeaderContainer>
      <Modal
        id="UploadToTravelWallConfirm"
        optionStyle={modalStyle}
        isVisible={isModalVisible}
      >
        <ModalContent
          message="您確定要將此旅程分享到旅遊牆嗎？"
          onOk={handleOnOk}
          onCancel={handleOnCancel}
        />
      </Modal>
    </>
  );
};

DetailPlanningPage.propTypes = {
  user: PropTypes.instanceOf(Map),
  match: PropTypes.object,
  projects: PropTypes.instanceOf(Map).isRequired,
  handleSubmitUpdateProject: PropTypes.func,
};

DetailPlanningPage.defaultProps = {
  user: Map(),
  match: {},
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  projects: selectProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanningPage);
