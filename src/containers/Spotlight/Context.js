import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { DEFAULT_PROJECT } from './constants';

const SpotlightContext = createContext();
const { Provider, Consumer } = SpotlightContext;

const useSelection = () => {
  const [headerTitle, setHeaderTitle] = useState('');
  const [isNavVisible, setIsNavVisible] = useState(true);

  // create project
  const [newProject, setNewProject] = useState(fromJS(DEFAULT_PROJECT));

  return {
    headerTitle,
    setHeaderTitle,
    isNavVisible,
    setIsNavVisible,

    // create project
    newProject,
    setNewProject,
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
