import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Map } from 'immutable';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { selectExploringSpot } from 'containers/Spotlight/selectors';
import { exploreNextSpot } from 'containers/Spotlight/actions';

const Container = styled.div`
  padding-top: 36px;
`;

const Card = styled.div`
  display: block;
`;

const CardImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px;
  background: lightgray;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 6px 12px;
  background: lightgray;
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ExplorePage = (props) => {
  const {
    spot,
    handleSwipeLeft,
    handleSwipeRight,
  } = props;

  return (
    <Container>
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
