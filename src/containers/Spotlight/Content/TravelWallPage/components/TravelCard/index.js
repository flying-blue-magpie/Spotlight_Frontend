import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { Container } from './Styled';

const TravelCard = ({ projectId }) => {
  const imagePath = 'https://www.silverkris.com/wp-content/uploads/2017/08/taipei-ximending.jpg';
  const handleOnClick = useCallback(() => {
    const detailPlanningPagePath = `/${PAGE_NAME.DETAIL_PLANNING.name}`;
    const defaultDay = 1;
    history.push({
      pathname: `${detailPlanningPagePath}/${projectId}`,
      search: `?day=${defaultDay}`,
    });
  });
  return (
    <Container imagePath={imagePath}>
      <div className="travel-card__header-wrapper">
        <i className="fas fa-user-circle travel-card__header-image" />
        <div className="travel-card__profile-wrapper">
          <div className="travel-card__header-name">這裡是名字</div>
          <div className="travel-card__header-time">1天前</div>
        </div>
      </div>
      <div role="presentation" className="travel-card__body-wrapper" onClick={handleOnClick}>
        <div className="travel-card__body-cover" />
        <div className="travel-card__body-text-wrapper">
          <div className="travel-card__body-title">台北購物之旅</div>
          <div className="travel-card__body-period">2019年6月5日-2019年6月9日 / 4天</div>
        </div>
      </div>
      <div className="travel-card__footer-wrapper">
        <i className="far fa-heart travel-card__footer-icon" />
        <div className="travel-card__footer-number">666</div>
      </div>
    </Container>
  );
};

TravelCard.propTypes = {
  projectId: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

TravelCard.propTypes = {
};

export default TravelCard;
