import React from 'react';
import { withRouter } from 'react-router';
import history from 'utils/history';
import {
  HeaderContainer,
  HeaderLeftButtons,
  HeaderButton,
} from '../Styled';

const AddSpotToProjectPage = () => (
  <HeaderContainer>
    <HeaderLeftButtons>
      <HeaderButton type="button" onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left" />
      </HeaderButton>
    </HeaderLeftButtons>
  </HeaderContainer>
);

AddSpotToProjectPage.propTypes = {
};

export default withRouter(AddSpotToProjectPage);
