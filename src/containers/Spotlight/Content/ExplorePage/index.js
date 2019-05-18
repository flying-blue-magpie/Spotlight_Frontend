import React, {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useContext,
} from 'react';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map, fromJS, List } from 'immutable';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import message from 'antd/lib/message';
import { useTranslation } from 'react-i18next';
import {
  selectExploringSpot,
  selectSearchRecSpotsMeta,
  selectFavoriteSpotIdsMeta,
  selectRecSpotIds,
} from 'containers/Spotlight/selectors';
import {
  exploreNextSpot,
  likeSpot,
  fetchFavoriteSpotIds,
  fetchRecSpots,
  searchRecSpots,
} from 'containers/Spotlight/actions';
import { REC_SPOTS_BUFFER_COUNT, ZONES } from 'containers/Spotlight/constants';
import Spinner from 'components/Spinner';
import { PAGE_NAME } from 'Styled/Settings/constants';
import Context from 'containers/Spotlight/Context';
import ZoneMenu from './ZoneMenu';
import { zoneReducer } from './reducer';
import CardImage from './CardImage';
import {
  Container,
  CardRow,
  Card,
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
  SpotNotFound,
} from './Styled';

const { SpotlightContext } = Context;

const ExplorePage = (props) => {
  const {
    spot,
    searchRecSpotsMeta,
    location,
    history,
    handleFetchFavoriteSpotIds,
    favoriteSpotIdsMeta,
    handleFetchRecSpots,
    handleLikeSpot,
    handleExploreNextSpot,
    recSpotIds,
    handleSearchRecSpots,
  } = props;

  const [zonesState, dispatch] = useReducer(zoneReducer, fromJS(ZONES));
  const selectedZones = zonesState
    .filter((zone) => zone.get('selected'))
    .map((zone) => zone.get('name'))
    .toList()
    .toJS();

  const [keyword, setKeyword] = useState('');

  const { setIsHeaderVisible, language } = useContext(SpotlightContext);

  useEffect(() => {
    if (!favoriteSpotIdsMeta.get('isLoading')) {
      handleFetchFavoriteSpotIds();
    }

    if (recSpotIds.slice(recSpotIds.indexOf(spot.get('spot_id'))).size < REC_SPOTS_BUFFER_COUNT) {
      handleSearchRecSpots({ kw: keyword, zones: selectedZones, language });
    }
  }, []);

  useEffect(() => {
    if (query.menu === 'zone') {
      setIsHeaderVisible(false);
    }

    return (() => {
      setIsHeaderVisible(true);
    });
  });

  const keywordInputRef = useCallback((node) => {
    if (node !== null) {
      const changes = fromEvent(node, 'changeForRx').pipe(debounceTime(300));
      changes.subscribe((event) => {
        handleSearchRecSpots({
          kw: event.detail.keyword,
          zones: event.detail.zones,
          language,
        });
      });
    }
  }, []);

  const handleOnLikeClick = useCallback(() => {
    message.success('加入收藏');
    handleLikeSpot(spot.get('spot_id'));
    handleExploreNextSpot();
    handleFetchRecSpots({ kw: keyword, zones: selectedZones, language });
  });

  const handleOnSkipClick = useCallback(() => {
    handleExploreNextSpot();
    handleFetchRecSpots({ kw: keyword, zones: selectedZones, language });
  });

  const { t } = useTranslation();

  const query = queryString.parse(location.search);

  if (query.menu === 'zone') {
    return (
      <ZoneMenu
        location={location}
        history={history}
        zonesState={zonesState}
        dispatch={dispatch}
        keyword={keyword}
        handleSearchRecSpots={handleSearchRecSpots}
      />
    );
  }

  return (
    <Container>
      <SearchRow>
        <SearchBar>
          <SelectCountyButton onClick={() => history.replace(`${location.pathname}?menu=zone`)}>
            {t('chooseCounty')}
            <i className="fas fa-caret-right" />
          </SelectCountyButton>
          <SearchInputContainer>
            <SearchInput
              type="text"
              placeholder={t('searchForSpot')}
              value={keyword}
              onChange={(event) => {
                setKeyword(event.target.value);
                event.currentTarget.dispatchEvent(new CustomEvent('changeForRx', {
                  detail: {
                    keyword: event.target.value,
                    zones: selectedZones,
                  },
                }));
              }}
              ref={keywordInputRef}
            />
          </SearchInputContainer>
        </SearchBar>
      </SearchRow>
      <ZonesRow>
        {selectedZones.map((zone) => (
          <ZoneLabel key={zone}>
            {t(zone)}
            <ZoneLabelCrossIcon className="fas fa-times" />
          </ZoneLabel>
        ))}
      </ZonesRow>
      {searchRecSpotsMeta.get('isLoading') && <Spinner />}
      {(searchRecSpotsMeta.get('isLoaded') && recSpotIds.size > 0) && (
        <React.Fragment>
          <CardRow>
            <Link to={`/${PAGE_NAME.EXPLORE.name}/${spot.get('spot_id')}`}>
              <Card>
                <CardImage pics={spot.get('pic')} />
                <CardInfo>
                  <SpotName>{spot.get('name')}</SpotName>
                  <SpotLikes>
                    {t('favoriteWithCount', { count: spot.get('like_num') })}
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
              <span>{t('skip')}</span>
            </ButtonLabel>
            <ButtonLabel>
              <Button onClick={handleOnLikeClick}>
                <ButtonHeartIcon className="fas fa-heart" />
              </Button>
              <span>{t('wantToGo')}</span>
            </ButtonLabel>
          </ButtonRow>
        </React.Fragment>
      )}
      {(!searchRecSpotsMeta.get('isLoading') && recSpotIds.size === 0) && (
        <SpotNotFound>
          {t('noSpotFound')}
        </SpotNotFound>
      )}
    </Container>
  );
};

ExplorePage.propTypes = {
  spot: PropTypes.instanceOf(Map),
  searchRecSpotsMeta: PropTypes.object,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  handleFetchFavoriteSpotIds: PropTypes.func.isRequired,
  favoriteSpotIdsMeta: PropTypes.instanceOf(Map).isRequired,
  handleFetchRecSpots: PropTypes.func.isRequired,
  handleLikeSpot: PropTypes.func.isRequired,
  handleExploreNextSpot: PropTypes.func.isRequired,
  recSpotIds: PropTypes.instanceOf(List).isRequired,
  handleSearchRecSpots: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spot: selectExploringSpot(),
  searchRecSpotsMeta: selectSearchRecSpotsMeta(),
  favoriteSpotIdsMeta: selectFavoriteSpotIdsMeta(),
  recSpotIds: selectRecSpotIds(),
});

const mapDispatchToProps = (dispatch) => ({
  handleFetchFavoriteSpotIds: () => dispatch(fetchFavoriteSpotIds()),
  handleFetchRecSpots: ({ kw, zones, language }) => dispatch(fetchRecSpots({ kw, zones, language })),
  handleLikeSpot: (id) => dispatch(likeSpot(id)),
  handleExploreNextSpot: () => dispatch(exploreNextSpot()),
  handleSearchRecSpots: ({ kw, zones, language }) => dispatch(searchRecSpots({ kw, zones, language })),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage));
