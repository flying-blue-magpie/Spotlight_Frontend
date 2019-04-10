import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height}px;
  .fa-spinner {
    font-size: 3em;
    color: #d7d7d7;
  }
`;

const StyledSpinnerCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0.5;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .fa-spinner {
    font-size: 3em;
    color: #d7d7d7;
    position: absolute;
    top: ${(props) => props.height}px;
  }
`;

const Spinner = (props) => {
  const {
    height,
    type,
  } = props;
  if (type === 'opacity') {
    return (
      <StyledSpinnerCover height={200}>
        <i className="fa fa-spinner fa-spin" />
      </StyledSpinnerCover>
    );
  }
  return (
    <StyledSpinner height={height}>
      <i className="fa fa-spinner fa-spin" />
    </StyledSpinner>
  );
};

Spinner.propTypes = {
  height: PropTypes.number,
  type: PropTypes.string,
};

Spinner.defaultProps = {
  height: 300,
  type: null,
};

export default Spinner;
