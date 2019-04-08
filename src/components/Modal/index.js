import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 0.65;
  }
`;

const heightGrowingAnimation = keyframes`
  from {
    height: 10%;
  }
  to {
    height: 100%;
  }
`;

const addGrowingAnimation = (isHeightGrowing) => (isHeightGrowing ? 'modal-wrapper__height-growing-animation' : '');

const ModalWrapper = styled.div`
  .modal-wrapper__mask {
    background: black;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0.65;
    animation: 0.15s ease-in-out ${fade};
    position: absolute;
    bottom: 0;
  }
  .modal-wrapper__modal-content {
    position: absolute;
    z-index: 1000;
  }
  .modal-wrapper__height-growing-animation {
    animation: 0.2s ease-in-out ${heightGrowingAnimation};
  }
`;

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isVisible: PropTypes.bool,
    optionStyle: PropTypes.object,
    heightGrowing: PropTypes.bool,
  }

  static defaultProps = {
    children: null,
    isVisible: false,
    optionStyle: {},
    heightGrowing: false,
  }

  constructor(props) {
    super(props);
    this.el = document.getElementById('modal-root-element');
  }

  componentDidUpdate() {
    const {
      isVisible,
    } = this.props;
    const modalRoot = document.getElementById('modal-root-element');
    if (isVisible === true) {
      modalRoot.style.position = 'absolute';
      modalRoot.style.top = '0px';
      modalRoot.style.width = '100%';
      modalRoot.style.height = '100%';
      modalRoot.style.zIndex = '1';
      modalRoot.style.display = '';
    } else {
      modalRoot.style = {};
      document.getElementById('modal-root-element').style.display = 'none';
    }
  }

  componentWillUnmount() {
    document.getElementById('modal-root-element').style.display = 'none';
  }

  render() {
    const {
      children,
      isVisible,
      optionStyle,
      heightGrowing,
    } = this.props;
    if (isVisible) {
      return ReactDOM.createPortal(
        <ModalWrapper>
          <div className={`modal-wrapper__mask ${addGrowingAnimation(heightGrowing)}`} />
          <div className="modal-wrapper__modal-content" style={optionStyle}>{children}</div>
        </ModalWrapper>,
        this.el,
      );
    }
    return null;
  }
}

export default Modal;
