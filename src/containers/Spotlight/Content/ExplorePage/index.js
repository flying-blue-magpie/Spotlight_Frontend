import React, { useState, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, fromJS } from 'immutable';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import {
  selectExploringSpot,
  selectSpotsMeta,
  selectFavoriteSpotIdsMeta,
} from 'containers/Spotlight/selectors';
import {
  exploreNextSpot,
  fetchSpots,
  likeSpot,
  fetchFavoriteSpotIds,
} from 'containers/Spotlight/actions';
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
  SearchInputContainer,
  SearchInput,
  ZonesRow,
  ZoneLabel,
  ButtonLabel,
  SpotName,
  SpotLikes,
  ZoneLabelCrossIcon,
} from './Styled';

const ExplorePage = (props) => {
  const {
    spot,
    handleSwipeLeft,
    createHandleSwipeRight,
    handleFetchSpots,
    setSpotsMeta,
    location,
    history,
    handleFetchFavoriteSpotIds,
    favoriteSpotIdsMeta,
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
    if (!favoriteSpotIdsMeta.get('isLoading')) {
      handleFetchFavoriteSpotIds();
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
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder="搜尋景點關鍵字"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              onKeyUp={handleSearchInputKeyUp}
            />
          </SearchInputContainer>
        </SearchBar>
      </SearchRow>
      <ZonesRow>
        {selectedZones.map((zone) => (
          <ZoneLabel key={zone}>
            {zone}
            <ZoneLabelCrossIcon className="fas fa-times" />
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
                    <SpotName>{spot.get('name')}</SpotName>
                    <SpotLikes>
                      {spot.get('like_num')}
                      人收藏
                    </SpotLikes>
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
                <Button onClick={createHandleSwipeRight(spot.get('spot_id'))}>
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
  createHandleSwipeRight: PropTypes.func.isRequired,
  handleFetchSpots: PropTypes.func.isRequired,
  setSpotsMeta: PropTypes.object,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
};

const mapStateToProps = createStructuredSelector({
  spot: selectExploringSpot(),
  setSpotsMeta: selectSpotsMeta(),
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSwipeLeft: () => dispatch(exploreNextSpot()),
  createHandleSwipeRight: (spotId) => () => {
    dispatch(likeSpot(spotId));
    dispatch(exploreNextSpot());
  },
  handleFetchSpots: ({ kw, zones } = {}) => dispatch(fetchSpots({ kw, zones })),
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage));
