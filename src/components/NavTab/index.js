import React from 'react';
import styled from 'styled-components';
import {
  findAttributeInEvent,
} from 'utils/event';
import history from 'utils/history';

const NavTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #D3D3D3;
  font-size: 12px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #D3D3D380;
  }

  .nav-tab__image {
    height: 30px;
    width: 30px;
    margin: 2px;
  }
`;

const NavTab = (props) => {
  const {
    title,
  } = props;
  const handleRedirect = (event) => {
    const pagePath = findAttributeInEvent(event, 'data-page-path');
    history.push(`/${pagePath}`);
  }

  return (
    <NavTabWrapper data-page-path={title} onClick={handleRedirect}>
      <img className="nav-tab__image" src="https://freeiconshop.com/wp-content/uploads/edd/bulb-curvy-flat.png" alt=""/>
      <div>{title}</div>
    </NavTabWrapper>
  );
};

export default NavTab;
