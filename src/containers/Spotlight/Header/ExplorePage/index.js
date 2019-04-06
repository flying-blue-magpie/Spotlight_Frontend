import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderLinkButton,
  HeaderLeftButtons,
  HeaderRightButtons,
} from '../Styled';

const ExplorePageHeader = ({ location }) => {
  const { menu } = queryString.parse(location.search);

  return (
    <HeaderContainer>
      <HeaderLeftButtons>
        {menu === 'zone' &&
          <HeaderLinkButton to={`/${PAGE_NAME.EXPLORE.name}`}>
            <i className="fas fa-arrow-left" />
          </HeaderLinkButton>
        }
      </HeaderLeftButtons>
      <HeaderTitle>
        {menu === 'zone' ? '縣市選擇' : PAGE_NAME.EXPLORE.text}
      </HeaderTitle>
      <HeaderRightButtons>
        {menu === 'zone' &&
          <HeaderLinkButton to={`/${PAGE_NAME.EXPLORE.name}`}>
            <i className="fas fa-check" />
          </HeaderLinkButton>
        }
      </HeaderRightButtons>
    </HeaderContainer>
  );
};

ExplorePageHeader.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ExplorePageHeader);
