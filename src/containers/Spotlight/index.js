import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import Spinner from 'components/Spinner';
import {
  fetchSpots,
} from './actions';
import {
  selectSpotsMeta,
  selectSpots,
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
  location,
}) => {
  const isLoading = setSpotsMeta.get('isLoading');
  const isLoaded = setSpotsMeta.get('isLoaded');
  useEffect(() => {
    if (!isLoaded) {
      handleFetchSpots();
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
                  isLoading
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
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchSpots: () => dispatch(fetchSpots()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spotlight));
