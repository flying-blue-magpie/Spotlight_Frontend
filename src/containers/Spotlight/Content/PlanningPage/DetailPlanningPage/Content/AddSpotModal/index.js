import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Modal from 'components/Modal';

const modalStyle = {
  bottom: '0px',
  width: '100%',
  padding: '15px',
};

const Button = styled.button`
  font-size: 16px;
  padding: 10px 0;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 10px;
`;

const AddFromFavoriteButton = styled(Button)`
  color: #333333;
  margin-bottom: 5px;
`;

const CreateSpotButton = styled(Button)`
  color: #333333;
  margin-bottom: 15px;
`;

const CancelButton = styled(Button)`
  color: #EB715A;
`;

const AddSpotModal = ({
  onAddFromFavoriteClick,
  onCreateSpotButtonClick,
  onCancelClick,
}) => (
  <Modal
    id="SpotOperationBtn"
    optionStyle={modalStyle}
    isVisible
  >
    <AddFromFavoriteButton onClick={onAddFromFavoriteClick}>從收藏添加景點</AddFromFavoriteButton>
    <CreateSpotButton onClick={onCreateSpotButtonClick}>自建景點</CreateSpotButton>
    <CancelButton onClick={onCancelClick}>取消</CancelButton>
  </Modal>
);

AddSpotModal.propTypes = {
  onAddFromFavoriteClick: PropTypes.func,
  onCreateSpotButtonClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};

export default AddSpotModal;
