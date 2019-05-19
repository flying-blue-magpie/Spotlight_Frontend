import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import { selectUser } from 'containers/Spotlight/selectors';
import peopleIconPath from 'assets/people_icon_100.svg';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import { StyledFaviBanner } from './styles';

const FaviBanner = ({
  user,
}) => {
  if (!user) {
    return null;
  }
  const handleOnClick = useCallback(() => {
    history.push(`/${PAGE_NAME.TRAVELER.name}/${user.get('user_id')}`);
  }, [user]);
  const faviconPath = user.get('portrait_link') || peopleIconPath;
  return (
    <StyledFaviBanner
      faviconPath={faviconPath}
      onClick={handleOnClick}
    >
      <div className="favi-banner__user">
        <div className="favi-banner__favicon" />
        <div className="favi-banner__name">{(user && user.get('name'))}</div>
      </div>
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
