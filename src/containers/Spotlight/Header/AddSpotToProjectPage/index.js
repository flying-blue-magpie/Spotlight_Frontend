import React from 'react';
import { withRouter } from 'react-router';
import history from 'utils/history';
import {
  HeaderContainer,
  LeftButtons,
  Button,
} from './Styled';

const AddSpotToProjectPage = () => (
  <HeaderContainer>
    <LeftButtons>
      <Button type="button" onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left" />
      </Button>
    </LeftButtons>
  </HeaderContainer>
);

AddSpotToProjectPage.propTypes = {
};

export default withRouter(AddSpotToProjectPage);
