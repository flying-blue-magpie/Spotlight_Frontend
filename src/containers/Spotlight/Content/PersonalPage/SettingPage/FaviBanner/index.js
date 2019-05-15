import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { selectUser } from 'containers/Spotlight/selectors';
import peopleIconPath from 'assets/people_icon_100.svg';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { StyledFaviBanner } from './styles';

const FaviBanner = ({
  user,
}) => {
  const faviconPath = (user && user.get('portrait_link')) || peopleIconPath;
  return (
    <StyledFaviBanner
      faviconPath={faviconPath}
      to={`/${PAGE_NAME.TRAVELER.name}/${user && user.get('user_id')}`}
    >
      <div className="favi-banner__favicon" />
      <div className="favi-banner__favicon-right-arrow" />
    </StyledFaviBanner>
  );
};

FaviBanner.propTypes = {
  user: PropTypes.instanceOf(Map),
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
});

export default connect(mapStateToProps)(FaviBanner);
