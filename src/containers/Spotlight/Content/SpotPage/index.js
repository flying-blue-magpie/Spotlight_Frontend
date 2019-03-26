import React from 'react';

const SpotPage = ({ match }) => (
  <div>
    <h3>ID: {match.params.spotId}</h3>
  </div>
);

export default SpotPage;
