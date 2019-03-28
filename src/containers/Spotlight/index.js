import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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
  setSpotsMeta: {
    isLoading,
  },
  spots,
  handleFetchSpots,
}) => {
  useEffect(() => {
    if (!spots.size) {
      handleFetchSpots();
    }
  });
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
                : <Content />
              }
              </div>
              {
                isNavVisible &&
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
  isLoading: PropTypes.bool,
  spots: PropTypes.instanceOf(List),
  handleFetchSpots: PropTypes.func,
}

Spotlight.defaultProps = {
  isLoading: false,
  spots: List(),
  handleFetchSpots: () => { },
}

const mapStateToProps = createStructuredSelector({
  setSpotsMeta :selectSpotsMeta(),
  spots: selectSpots(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchSpots: () => dispatch(fetchSpots()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Spotlight);
