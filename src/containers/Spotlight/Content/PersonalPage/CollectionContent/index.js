import React from 'react';
import { findAttributeInEvent } from 'utils/event';
import history from 'utils/history';
import SpotCollection from './SpotCollection';
import ProjectCollection from './ProjectCollection';

const CollectionContent = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const handleOnCardClick = (event) => {
    const id = findAttributeInEvent(event, 'data-id');
    const redirectPath = findAttributeInEvent(event, 'data-redirect-path');
    history.push({
      pathname: `${redirectPath}/${id}`,
    });
  };
  if (searchParams.get('collectionType') === 'planning') {
    return <ProjectCollection />;
  }
  return <SpotCollection handleOnClick={handleOnCardClick} />;
};

export default CollectionContent;
