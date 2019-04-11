import React from 'react';
import PropTyps from 'prop-types';

const TravelerPage = ({ match }) => (
  <div>
    Traveler Page:
    {match.params.userId}
  </div>
);

TravelerPage.propTypes = {
  match: PropTyps.object.isRequired,
};

export default TravelerPage;
