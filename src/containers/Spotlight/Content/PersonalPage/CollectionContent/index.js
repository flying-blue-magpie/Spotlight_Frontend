import React from 'react';
import PropTypes from 'prop-types';
import SpotCollection from './SpotCollection';
import PlanningCollection from './PlanningCollection';

const CollectionContent = ({ activeCollectionType }) => {
  if (activeCollectionType === 'planning') {
    return <PlanningCollection />
  }
  return <SpotCollection />;
};

CollectionContent.propTypes = {
  activeCollectionType: PropTypes.isRequired,
};

CollectionContent.propTypes = {
};

export default CollectionContent;
