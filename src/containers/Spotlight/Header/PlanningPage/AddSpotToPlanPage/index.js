import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { PAGE_NAME } from 'Styled/Settings/constants';
import message from 'antd/lib/message';
import history from 'utils/history';
import {
  HeaderContainer,
} from 'containers/Spotlight/Header/Styled';
import Context from 'containers/Spotlight/Context';

import arrowRightIconPath from 'assets/arrow_right_icon.svg';
import arrowLeftIconPath from 'assets/arrow_left_icon.svg';

const { SpotlightContext } = Context;

const AddSpotToPlanPage = (props) => {
  const {
    match,
  } = props;
  const context = useContext(SpotlightContext);
  const {
    selectedLikedSpotId,
  } = context;
  const { projectId } = match.params;
  const searchParams = new URLSearchParams(window.location.search);
  const day = searchParams.get('day');
  const handleGoBackToDetailPlanning = useCallback(() => {
    history.goBack();
  }, []);
  const handleOnCheckBtn = useCallback(() => {
    if (!selectedLikedSpotId) {
      message.warning('請選擇景點卡');
      return;
    }
    const settingSpotCardPagePath = `/${PAGE_NAME.SETTING_SPOT_CARD.name}/${projectId}`;
    history.push({
      pathname: settingSpotCardPagePath,
      search: `?day=${day}`,
    });
  }, [selectedLikedSpotId, day]);
  return (
    <HeaderContainer>
      <div className="header-container__icon-wrapper icon-left">
        <div role="presentation" onClick={handleGoBackToDetailPlanning}>
          <img className="icon-style" src={arrowLeftIconPath} alt="" />
        </div>
      </div>
      <div>{PAGE_NAME.ADD_SPOT_TO_PLAN.text}</div>
      <div className="header-container__icon-wrapper icon-right">
        <div role="presentation" onClick={handleOnCheckBtn}>
          <img className="icon-style" src={arrowRightIconPath} alt="" />
        </div>
      </div>
    </HeaderContainer>
  );
};

AddSpotToPlanPage.propTypes = {
  match: PropTypes.object,
};

AddSpotToPlanPage.defaultProps = {
  match: {},
};

export default AddSpotToPlanPage;
