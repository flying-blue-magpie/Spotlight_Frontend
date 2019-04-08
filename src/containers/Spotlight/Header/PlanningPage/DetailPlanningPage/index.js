import React, { useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';
import uploadTravelWallIconPath from 'assets/upload_travel_wall_icon.svg';

const { SpotlightContext } = Context;

const DetailPlanningPage = (props) => {
  const context = useContext(SpotlightContext);
  const {
    setIsNavVisible,
  } = context;
  useEffect(() => {
    setIsNavVisible(false);
    return () => {
      setIsNavVisible(true);
    };
  }, []);
  const handleGoBackToPlanning = useCallback(() => {
    history.push(`/${PAGE_NAME.PLANNING.name}`);
  }, []);
  const handleGoToUpdatePlanningPage = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;
    history.push({
      pathname: `/${PAGE_NAME.UPDATE_PLANNING.name}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i role="presentation" className="fas fa-arrow-left icon-style" onClick={handleGoBackToPlanning} />
      </div>
      <div>{PAGE_NAME.DETAIL_PLANNING.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i role="presentation" className="fas fa-pen icon-style" onClick={handleGoToUpdatePlanningPage} />
        <img src={uploadTravelWallIconPath} className="icon-style" alt="" />
      </div>
    </HeaderContainer>
  );
};

DetailPlanningPage.propTypes = {
  match: PropTypes.object,
};

DetailPlanningPage.defaultProps = {
  match: {},
};

export default DetailPlanningPage;
