import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import Spinner from 'components/Spinner';
import {
  fetchSpots, fetchLoginStatus,
} from './actions';
import {
  selectSpotsMeta,
  selectSpots,
  selectLoginStatusMeta,
} from './selectors';
import SpotlightContext from './Context';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import {
  SpotlightContainer,
} from './Styled';

const {
  SpotlightProvider,
  SpotlightConsumer,
} = SpotlightContext;

const Spotlight = ({
  setSpotsMeta,
  spots,
  handleFetchSpots,
  handleFetchLoginStatus,
  location,
  loginStatusMeta,
}) => {
  const isLoading = setSpotsMeta.get('isLoading');
  const isLoaded = setSpotsMeta.get('isLoaded');
  useEffect(() => {
    if (!isLoaded) {
      handleFetchSpots();
    }
    if (!loginStatusMeta.get('isLoaded')) {
      handleFetchLoginStatus();
    }
  }, []);
  return (
    <SpotlightProvider>
      <SpotlightConsumer>
        {
          ({ isNavVisible }) => (
            <SpotlightContainer isNavVisible={isNavVisible}>
              <div className="spot-light__header-container">
                <Header />
              </div>
              <div className="spot-light__content-container">
                {
                  (isLoading || loginStatusMeta.get('isLoading'))
                    ? <Spinner />
                    : <Content spots={spots} />
                }
              </div>
              {
                isNavVisible &&
                location.pathname !== '/' &&
                <div className="spot-light__navigation-container">
                  <Navigation />
                </div>
              }
            </SpotlightContainer>
          )
        }
      </SpotlightConsumer>
    </SpotlightProvider>
  );
};

Spotlight.propTypes = {
  setSpotsMeta: PropTypes.object,
  spots: PropTypes.instanceOf(List),
  handleFetchSpots: PropTypes.func,
  handleFetchLoginStatus: PropTypes.func.isRequired,
  loginStatusMeta: PropTypes.instanceOf(Map),
  location: PropTypes.object.isRequired,
};

Spotlight.defaultProps = {
  setSpotsMeta: null,
  spots: List(),
  handleFetchSpots: () => { },
};

const mapStateToProps = createStructuredSelector({
  setSpotsMeta: selectSpotsMeta(),
  spots: selectSpots(),
  loginStatusMeta: selectLoginStatusMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchSpots: () => dispatch(fetchSpots()),
  handleFetchLoginStatus: () => dispatch(fetchLoginStatus()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spotlight));
