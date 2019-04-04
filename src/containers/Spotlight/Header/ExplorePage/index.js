import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import queryString from 'query-string';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  Title,
  LinkButton,
  LeftButtons,
  RightButtons,
} from './Styled';

const ExplorePageHeader = ({ location }) => {
  const { menu } = queryString.parse(location.search);

  return (
    <HeaderContainer>
      <LeftButtons>
        {menu === 'zone' &&
          <LinkButton to={`/${PAGE_NAME.EXPLORE}`}>
            <i className="fas fa-arrow-left" />
          </LinkButton>
        }
      </LeftButtons>
      <Title>
        {menu === 'zone' ? '縣市選擇' : PAGE_NAME.EXPLORE}
      </Title>
      <RightButtons>
        {menu === 'zone' &&
          <LinkButton to={`/${PAGE_NAME.EXPLORE}`}>
            <i className="fas fa-check" />
          </LinkButton>
        }
      </RightButtons>
    </HeaderContainer>
  );
};

ExplorePageHeader.propTypes = {
  location: PropTypes.object.isRequired,
};

export default withRouter(ExplorePageHeader);
