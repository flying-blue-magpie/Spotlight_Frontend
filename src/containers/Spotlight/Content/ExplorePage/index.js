import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import { Link } from 'react-router-dom';
import { selectExploringSpot } from 'containers/Spotlight/selectors';
import { exploreNextSpot } from 'containers/Spotlight/actions';

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
} from './Styled';

const ExplorePage = (props) => {
  const {
    spot,
    handleSwipeLeft,
    handleSwipeRight,
  } = props;

  const zones = ['新竹市', '高雄市'];

  return (
    <Container>
      <SearchRow>
        <SearchBar>
          <SelectCountyButton>
            縣市選擇
            <i className="fas fa-caret-right" />
          </SelectCountyButton>
          <SearchInput type="text" placeholder="你想去的景點或街道名稱" />
        </SearchBar>
      </SearchRow>
      <ZonesRow>
        {zones.map((zone) => (
          <ZoneLabel key={zone}>
            {zone}
            <i className="fas fa-times" />
          </ZoneLabel>
        ))}
      </ZonesRow>
      <CardRow>
        <Card>
          <CardImage src={spot.getIn(['pic', 0]) || 'https://www.taiwan.net.tw/att/1/big_scenic_spots/pic_R177_10.jpg'} />
          <CardInfo>
            {spot.get('name')}
            <i className="fas fa-heart">666</i>
          </CardInfo>
        </Card>
      </CardRow>
      <ButtonRow>
        <Button onClick={handleSwipeLeft}>跳過</Button>
        <Link to="/探索景點/1">詳細</Link>
        <Button onClick={handleSwipeRight}>想去</Button>
      </ButtonRow>
    </Container>
  );
};

ExplorePage.propTypes = {
  spot: PropTypes.instanceOf(Map),
  handleSwipeLeft: PropTypes.func.isRequired,
  handleSwipeRight: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  spot: selectExploringSpot(),
});

const mapDispatchToProps = (dispatch) => ({
  handleSwipeLeft: () => dispatch(exploreNextSpot()),
  handleSwipeRight: () => dispatch(exploreNextSpot()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePage);
