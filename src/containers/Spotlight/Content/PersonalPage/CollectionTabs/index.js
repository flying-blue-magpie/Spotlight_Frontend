import React from 'react';
import PropTypes from 'prop-types';

const isActive = (isActive) => isActive ? 'personal-page__collection-tab--active' : '';

const CollectionTabs = ({ activeCollectionType, handleOnClick }) => (
  <div className="personal-page__collection-group">
    <div className={`personal-page__collection-tab ${isActive(activeCollectionType === 'spot')}`} data-collection-type={'spot'} onClick={handleOnClick}>
      <span>收藏景點</span>
    </div>
    <div className={`personal-page__collection-tab ${isActive(activeCollectionType === 'planning')}`} data-collection-type={'planning'} onClick={handleOnClick}>
      <span>收藏旅程</span>
    </div>
  </div>
);

CollectionTabs.propTypes = {
  activeCollectionType: PropTypes.isRequired,
  handleOnClick: PropTypes.func,
};

CollectionTabs.propTypes = {
  handleOnClick: () => { },
};

export default CollectionTabs;
