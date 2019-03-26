import React, { createContext, useState } from 'react';
const SpotlightContext = createContext();
const { Provider, Consumer }  = SpotlightContext;

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

export default {
  SpotlightProvider,
  SpotlightConsumer: Consumer,
  SpotlightContext,
};
