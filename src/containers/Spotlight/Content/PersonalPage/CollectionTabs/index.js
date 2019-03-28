import React from 'react';
import PropTypes from 'prop-types';

const isActiveStyle = (isActive) => (isActive ? 'personal-page__collection-tab--active' : '');

const CollectionTabs = ({ handleOnClick }) => {
  const searchParams = new URLSearchParams(window.location.search);
  const activeCollectionType = searchParams.get('collectionType') || 'spot';
  return (
    <div className="personal-page__collection-group">
      <div role="presentation" className={`personal-page__collection-tab ${isActiveStyle(activeCollectionType === 'spot')}`} data-collection-type="spot" onClick={handleOnClick}>
        <span>收藏景點</span>
      </div>
      <div role="presentation" className={`personal-page__collection-tab ${isActiveStyle(activeCollectionType === 'planning')}`} data-collection-type="planning" onClick={handleOnClick}>
        <span>收藏旅程</span>
      </div>
    </div>
  );
};

CollectionTabs.propTypes = {
  handleOnClick: PropTypes.func,
};

CollectionTabs.propTypes = {
  handleOnClick: () => { },
};

export default CollectionTabs;
