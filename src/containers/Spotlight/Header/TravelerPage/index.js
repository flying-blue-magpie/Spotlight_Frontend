import React from 'react';
import history from 'utils/history';
import { PAGE_NAME } from 'Styled/Settings/constants';
import {
  HeaderContainer,
  HeaderLeftButtons,
  HeaderRightButtons,
  HeaderButton,
} from '../Styled';


const TravelPage = () => (
  <HeaderContainer>
    <HeaderLeftButtons>
      <HeaderButton onClick={() => history.goBack()}>
        <i className="fas fa-arrow-left" />
      </HeaderButton>
    </HeaderLeftButtons>
    {PAGE_NAME.TRAVELER.text}
    <HeaderRightButtons />
  </HeaderContainer>
);

export default TravelPage;
