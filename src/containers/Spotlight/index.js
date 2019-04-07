import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';
import Spinner from 'components/Spinner';
import {
  fetchLoginStatus,
} from './actions';
import {
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
  handleFetchLoginStatus,
  loginStatusMeta,
}) => {
  useEffect(() => {
    if (!loginStatusMeta.get('isLoading')) {
      handleFetchLoginStatus();
    }
  }, []);
  return (
    <SpotlightProvider>
      <SpotlightConsumer>
        {
          ({ isNavVisible, isHeaderVisible }) => (
            <SpotlightContainer isNavVisible={isNavVisible} isHeaderVisible={isHeaderVisible}>
              {
                isHeaderVisible &&
                <div className="spot-light__header-container">
                  <Header />
                </div>
              }
              <div className="spot-light__content-container">
                {
                  (loginStatusMeta.get('isLoading'))
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
  handleFetchLoginStatus: PropTypes.func.isRequired,
  loginStatusMeta: PropTypes.instanceOf(Map),
};

Spotlight.defaultProps = {
};

const mapStateToProps = createStructuredSelector({
  loginStatusMeta: selectLoginStatusMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchLoginStatus: () => dispatch(fetchLoginStatus()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spotlight));
