import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, fromJS } from 'immutable';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { selectExploringSpot, selectSpotsMeta } from 'containers/Spotlight/selectors';
import { exploreNextSpot, fetchSpots } from 'containers/Spotlight/actions';
import Spinner from 'components/Spinner';
import { PAGE_NAME } from 'Styled/Settings/constants';
import ZoneMenu from './ZoneMenu';
import { zoneReducer } from './reducer';
import { zones as zonesData } from './constants';

import {
  Container,
  CardRow,
  Card,
  CardImage,
  CardInfo,
  ButtonRow,
  Button,
  SearchRow,
  SearchBar,
  SelectCountyButton,
  SearchInput,
  ZonesRow,
  ZoneLabel,
  ButtonLabel,
} from './Styled';

const ExplorePage = (props) => {
  const {
    spot,
    handleSwipeLeft,
    handleSwipeRight,
    handleFetchSpots,
    setSpotsMeta,
    location,
    history,
  } = props;

  const [zonesState, dispatch] = useReducer(zoneReducer, fromJS(zonesData));
  const selectedZones = zonesState
    .filter((zone) => zone.get('selected'))
    .map((zone) => zone.get('name'))
    .toList()
    .toJS();

  const [keyword, setKeyword] = useState('');
  const handleSearchInputKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleFetchSpots({ kw: keyword, zones: selectedZones });
      event.currentTarget.blur();
    }
  };

  useEffect(() => {
    if (!setSpotsMeta.get('isLoading')) {
      handleFetchSpots();
    }
  }, []);

  const query = queryString.parse(location.search);

  if (query.menu === 'zone') {
    return (
      <ZoneMenu
        location={location}
        history={history}
        zonesState={zonesState}
        dispatch={dispatch}
      />
    );
  }

  return (
    <Container>
      <SearchRow>
        <SearchBar>
          <SelectCountyButton onClick={() => history.push(`${location.pathname}?menu=zone`)}>
            縣市選擇
            <i className="fas fa-caret-right" />
          </SelectCountyButton>
          <SearchInput
            type="text"
            placeholder="你想去的景點或街道名稱"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyUp={handleSearchInputKeyUp}
          />
        </SearchBar>
      </SearchRow>
      <ZonesRow>
        {selectedZones.map((zone) => (
          <ZoneLabel key={zone}>
            {zone}
            <i className="fas fa-times" />
          </ZoneLabel>
        ))}
      </ZonesRow>
      {setSpotsMeta.get('isLoading')
        ? <Spinner />
        : (
          <React.Fragment>
            <CardRow>
              <Link to={`/${PAGE_NAME.EXPLORE}/${spot.get('spot_id')}`}>
                <Card>
                  <CardImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
                  <CardInfo>
                    {spot.get('name')}
                    <span>
                      {spot.get('like_num')}
                      人收藏
                    </span>
                  </CardInfo>
                </Card>
              </Link>
            </CardRow>
            <ButtonRow>
              <ButtonLabel>
                <Button onClick={handleSwipeLeft}>
                  <i className="fas fa-times" />
                </Button>
                <span>跳過</span>
              </ButtonLabel>
              <ButtonLabel>
                <Button onClick={handleSwipeRight}>
                  <i className="fas fa-heart" />
                </Button>
                <span>想去</span>
              </ButtonLabel>
            </ButtonRow>
          </React.Fragment>
        )
      }
    </Container>
  );
};

ExplorePage.propTypes = {
  spot: PropTypes.instanceOf(Map),
  handleSwipeLeft: PropTypes.func.isRequired,
  handleSwipeRight: PropTypes.func.isRequired,
  handleFetchSpots: PropTypes.func.isRequired,
  setSpotsMeta: PropTypes.object,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spot: selectExploringSpot(),
  setSpotsMeta: selectSpotsMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSwipeLeft: () => dispatch(exploreNextSpot()),
  handleSwipeRight: () => dispatch(exploreNextSpot()),
  handleFetchSpots: ({ kw, zones } = {}) => dispatch(fetchSpots({ kw, zones })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage));
