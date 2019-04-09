import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { List, fromJS } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  submitUpdateProject,
} from 'containers/Spotlight/actions';
import {
  selectOwnProjects,
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
    match,
    ownProjects,
    handleSubmitUpdateProject,
  } = props;
  const { projectId } = match.params;
  const ownProject = ownProjects.find((proj) => proj.get('proj_id').toString() === projectId);
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
    history.push({
      pathname: `/${PAGE_NAME.UPDATE_PLANNING.name}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  const handleUploadToTravelWall = useCallback(() => {
    if (!ownProject) {
      return;
    }
    const hasPublic = ownProject.get('is_public');
    if (hasPublic) {
      message.info('已經上傳至旅遊牆');
      return;
    }
    setIsModalVisible(true);
  }, [ownProjects]);
  const handleOnOk = useCallback(() => {
    const updatedProject = fromJS({ is_public: true });
    handleSubmitUpdateProject(projectId, updatedProject);
    setIsModalVisible(false);
  }, []);
  const handleOnCancel = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  return (
    <>
      <HeaderContainer>
        <div className="header-container__icon-wrapper icon-left">
          <i role="presentation" className="fas fa-arrow-left icon-style" onClick={handleGoBackToPlanning} />
        </div>
        <div>{PAGE_NAME.DETAIL_PLANNING.text}</div>
        <div className="header-container__icon-wrapper icon-right">
          <i role="presentation" className="fas fa-pen icon-style" onClick={handleGoToUpdatePlanningPage} />
          <div role="presentation" onClick={handleUploadToTravelWall}>
            <img src={uploadTravelWallIconPath} className="icon-style" alt="" />
          </div>
        </div>
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
  match: PropTypes.object,
  ownProjects: PropTypes.instanceOf(List).isRequired,
  handleSubmitUpdateProject: PropTypes.func,
};

DetailPlanningPage.defaultProps = {
  match: {},
  handleSubmitUpdateProject: () => { },
};

const mapStateToProps = createStructuredSelector({
  ownProjects: selectOwnProjects(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdateProject: (projectId, updateProject) => dispatch(submitUpdateProject(projectId, updateProject)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPlanningPage);
