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

const Spinner = (props) => {
  const {
    height,
  } = props;
  return (
    <StyledSpinner height={height}>
      <i className="fa fa-spinner fa-spin" />
    </StyledSpinner>
  );
};

Spinner.propTypes = {
  height: PropTypes.number,
};

Spinner.defaultProps = {
  height: 300,
};

export default Spinner;
