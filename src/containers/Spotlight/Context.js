import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const SpotlightContext = createContext();
const { Provider, Consumer } = SpotlightContext;

const useSelection = () => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(true);
  return {
    headerTitle,
    setHeaderTitle,
    isNavVisible,
    setIsNavVisible,
  };
};

const SpotlightProvider = (props) => {
  const {
    children,
  } = props;
  const value = useSelection();
  return (
    <Provider value={value}>
      {children}
    </Provider>
  );
};

SpotlightProvider.propTypes = {
  children: PropTypes.any,
};

SpotlightProvider.defaultProps = {
  children: null,
};

export default {
  SpotlightProvider,
  SpotlightConsumer: Consumer,
  SpotlightContext,
};
