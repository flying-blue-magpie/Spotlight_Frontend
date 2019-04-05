import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  .modal-wrapper__mask {
    background: black;
    width: 100%;
    height: 100%;
    z-index: 999;
    opacity: 0.5;
    position: absolute;
  }
  .modal-wrapper__modal-content {
    position: absolute;
    z-index: 1000;
  }
`;

class Modal extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    isVisible: PropTypes.bool,
    optionStyle: PropTypes.object,
  }

  static defaultProps = {
    children: null,
    isVisible: false,
    optionStyle: {},
  }

  constructor(props) {
    super(props);
    const {
      isVisible,
    } = this.props;
    if (isVisible) {
      this.el = document.createElement('div');
      this.el.style.position = 'absolute';
      this.el.style.top = '0px';
      this.el.style.width = '100%';
      this.el.style.height = '100%';
      this.el.style.zIndex = '1';
    }
  }

  componentDidMount() {
    if (this.el) {
      document.body.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.el) {
      document.body.removeChild(this.el);
    }
  }

  render() {
    const {
      children,
      isVisible,
      optionStyle,
    } = this.props;
    if (isVisible) {
      return ReactDOM.createPortal(
        <ModalWrapper>
          <div className="modal-wrapper__mask" />
          <div className="modal-wrapper__modal-content" style={optionStyle}>{children}</div>
        </ModalWrapper>,
        this.el,
      );
    }
    return null;
  }
}

export default Modal;
