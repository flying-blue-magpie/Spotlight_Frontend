import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  LeftButtons,
  RightButtons,
  LinkButton,
} from './Styled';

const SpotPage = ({ location }) => (
  <HeaderContainer>
    <LeftButtons>
      <LinkButton to={`/${PAGE_NAME.EXPLORE}`}>
        <i className="fas fa-arrow-left" />
      </LinkButton>
    </LeftButtons>
    <RightButtons>
      <LinkButton to={`${location.pathname}#test`}>
        <i className="fas fa-plus" />
      </LinkButton>
    </RightButtons>
  </HeaderContainer>
);

SpotPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(SpotPage);
