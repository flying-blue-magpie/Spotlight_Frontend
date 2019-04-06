import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  HeaderLeftButtons,
  HeaderRightButtons,
  HeaderLinkButton,
} from '../Styled';

const SpotPage = ({ location }) => (
  <HeaderContainer>
    <HeaderLeftButtons>
      <HeaderLinkButton to={`/${PAGE_NAME.EXPLORE.name}`}>
        <i className="fas fa-arrow-left" />
      </HeaderLinkButton>
    </HeaderLeftButtons>
    <HeaderRightButtons>
      <HeaderLinkButton to={`${location.pathname}/${PAGE_NAME.ADD_SPOT_TO_PROJECT.name}`}>
        <i className="fas fa-plus" />
      </HeaderLinkButton>
    </HeaderRightButtons>
  </HeaderContainer>
);

SpotPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(SpotPage);
