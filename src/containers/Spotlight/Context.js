import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { fromJS, Map, List } from 'immutable';
import { useTranslation } from 'react-i18next';
import { DEFAULT_PROJECT } from './constants';

const SpotlightContext = createContext();
const { Provider, Consumer } = SpotlightContext;

const useSelection = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  // create project
  const [newProject, setNewProject] = useState(fromJS(DEFAULT_PROJECT));
  const [isEditMode, setIsEditMode] = useState(false);

  // update project
  const [updateProject, setUpdateProject] = useState(Map());

  // select liked spot
  const [selectedLikedSpotId, setSelectedLikedSpotId] = useState();

  const [selectedDays, setSelectedDays] = useState(List());
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  return {
    isNavVisible,
    setIsNavVisible,

    isHeaderVisible,
    setIsHeaderVisible,

    // create project
    newProject,
    setNewProject,

    // update project
    updateProject,
    setUpdateProject,

    isEditMode,
    setIsEditMode,

    // select liked spot
    selectedLikedSpotId,
    setSelectedLikedSpotId,

    selectedDays,
    setSelectedDays,

    language,
    setLanguage: (language) => {
      i18n.changeLanguage(language);
      setLanguage(language);
    },
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
