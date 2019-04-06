import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { PAGE_NAME } from 'Styled/Settings/constants';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';

const AddSpotToPlanPage = (props) => {
  const handleGoBackToDetailPlanning = useCallback(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const day = searchParams.get('day');
    const { projectId } = props.match.params;
    history.push({
      pathname: `/${PAGE_NAME.DETAIL_PLANNING.name}/${projectId}`,
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
      <div>{PAGE_NAME.ADD_SPOT_TO_PLAN.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <i
          role="presentation"
          className="fas fa-check icon-style"
          // onClick={handleOnCheckBtn}
        />
      </div>
    </HeaderContainer>
  );
};

AddSpotToPlanPage.propTypes = {
  match: PropTypes.object,
  // handleSubmitUpdateProject: PropTypes.func,
};

AddSpotToPlanPage.defaultProps = {
  match: {},
  // handleSubmitUpdateProject: () => { },
};

export default AddSpotToPlanPage;
