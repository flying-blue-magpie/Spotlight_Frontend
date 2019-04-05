import React from 'react';
import { withRouter } from 'react-router';
import history from 'utils/history';
import {
  HeaderContainer,
  HeaderLeftButtons,
  HeaderButton,
  HeaderTitle,
  HeaderRightButtons,
} from '../Styled';

const AddSpotToProjectPlanPage = () => (
  <HeaderContainer>
    <HeaderLeftButtons>
      <HeaderButton type="button" onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left" />
      </HeaderButton>
    </HeaderLeftButtons>
    <HeaderTitle>
      加到我的行程
    </HeaderTitle>
    <HeaderRightButtons>
      <HeaderButton type="button" onClick={() => history.goBack()}>
        <i className="fas fa-check" />
      </HeaderButton>
    </HeaderRightButtons>
  </HeaderContainer>
);

AddSpotToProjectPlanPage.propTypes = {
};

export default withRouter(AddSpotToProjectPlanPage);
