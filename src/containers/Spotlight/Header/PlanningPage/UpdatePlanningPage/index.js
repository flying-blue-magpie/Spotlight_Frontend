import React, { useContext, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';

const { SpotlightContext } = Context;

const UpdatePlanningPage = (props) => {
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
  const handleGoBackToDetailPlanning = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;
    history.push({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  const handleOnCheckBtn = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;
    history.push({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING}/${projectId}`,
      search: `?day=${day}`,
    });
  }, []);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <i
          role="presentation"
          className="fas fa-times icon-style"
          onClick={handleGoBackToDetailPlanning}
        />
      </div>
      <div>{PAGE_NAME.UPDATE_PLANNING}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i
          role="presentation"
          className="fas fa-check icon-style"
          onClick={handleOnCheckBtn}
        />
      </div>
    </HeaderContainer>
  );
};

UpdatePlanningPage.propTypes = {
  match: PropTypes.object,
};

UpdatePlanningPage.defaultProps = {
  match: {},
};

export default UpdatePlanningPage;
