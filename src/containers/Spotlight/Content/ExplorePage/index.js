import React, {
  useState,
  useEffect,
  useReducer,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, fromJS, List } from 'immutable';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import ImageGallery from 'react-image-gallery';
import message from 'antd/lib/message';
import {
  selectExploringSpot,
  selectSpotsMeta,
  selectFavoriteSpotIdsMeta,
  selectRecSpotIds,
} from 'containers/Spotlight/selectors';
import {
  exploreNextSpot,
  fetchSpots,
  likeSpot,
  fetchFavoriteSpotIds,
  fetchRecSpots,
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
  ButtonCrossIcon,
  ButtonHeartIcon,
} from './Styled';

const REC_SPOTS_BUFFER_COUNT = 3;

const ExplorePage = (props) => {
  const {
    spot,
    handleFetchSpots,
    setSpotsMeta,
    location,
    history,
    handleFetchFavoriteSpotIds,
    favoriteSpotIdsMeta,
    handleFetchRecSpots,
    handleLikeSpot,
    handleExploreNextSpot,
    recSpotIds,
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
    if (!favoriteSpotIdsMeta.get('isLoading')) {
      handleFetchFavoriteSpotIds();
    }

    if (recSpotIds.slice(recSpotIds.indexOf(spot.get('spot_id'))).size < REC_SPOTS_BUFFER_COUNT) {
      for (let i = 0; i < REC_SPOTS_BUFFER_COUNT; i += 1) {
        handleFetchRecSpots({ kw: keyword, zones: selectedZones });
      }
    }
  }, []);

  const handleOnLikeClick = useCallback(() => {
    message.success('加入收藏');
    handleLikeSpot(spot.get('spot_id'));
    handleExploreNextSpot();
    handleFetchRecSpots({ kw: keyword, zones: selectedZones });
  });

  const handleOnSkipClick = useCallback(() => {
    handleExploreNextSpot();
    handleFetchRecSpots({ kw: keyword, zones: selectedZones });
  });

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
              <Link to={`/${PAGE_NAME.EXPLORE.name}/${spot.get('spot_id')}`}>
                <Card>
                  {(spot.get('pic') && spot.get('pic').size > 0)
                    ? (
                      <ImageGallery
                        items={spot.get('pic').map((pic) => ({ original: pic })).toJS()}
                        renderItem={(items) => <CardImage src={items.original} />}
                        showThumbnails={false}
                        showFullscreenButton={false}
                        showPlayButton={false}
                        showNav={false}
                        autoPlay
                        slideInterval={3000}
                        disableSwipe
                      />
                    ) : (
                      <CardImage src="https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg" />
                    )
                  }
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
                <Button onClick={handleOnSkipClick}>
                  <ButtonCrossIcon className="fas fa-times" />
                </Button>
                <span>跳過</span>
              </ButtonLabel>
              <ButtonLabel>
                <Button onClick={handleOnLikeClick}>
                  <ButtonHeartIcon className="fas fa-heart" />
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
  handleFetchSpots: PropTypes.func.isRequired,
  setSpotsMeta: PropTypes.object,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
  handleFetchRecSpots: PropTypes.func.isRequired,
  handleLikeSpot: PropTypes.func.isRequired,
  handleExploreNextSpot: PropTypes.func.isRequired,
  recSpotIds: PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = createStructuredSelector({
  spot: selectExploringSpot(),
  setSpotsMeta: selectSpotsMeta(),
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
  recSpotIds: selectRecSpotIds(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSwipeLeft: () => dispatch(exploreNextSpot()),
  handleFetchSpots: ({ kw, zones } = {}) => dispatch(fetchSpots({ kw, zones })),
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
  handleFetchRecSpots: ({ kw, zones }) => dispatch(fetchRecSpots({ kw, zones })),
  handleLikeSpot: (id) => dispatch(likeSpot(id)),
  handleExploreNextSpot: () => dispatch(exploreNextSpot()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage));
