import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import SpotOperationBtn from '../SpotOperationBtn';

const modalStyle = {
  bottom: '0px',
  width: '100%',
};

const EditExistingSpotModal = ({
  onDeleteSpotClick,
  onCancelClick,
  onEditSpotClick,
}) => (
  <Modal
    id="SpotOperationBtn"
    optionStyle={modalStyle}
    isVisible
  >
    <SpotOperationBtn
      handleDeleteSpot={onDeleteSpotClick}
      handleHideModal={onCancelClick}
      handleUpdate={onEditSpotClick}
    />
  </Modal>
);

EditExistingSpotModal.propTypes = {
  onDeleteSpotClick: PropTypes.func,
  onCancelClick: PropTypes.func,
  onEditSpotClick: PropTypes.func,
};

export default EditExistingSpotModal;
