import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  findAttributeInEvent,
} from 'utils/event';
import history from 'utils/history';

const setNavTabActive = (isActive) => (isActive ? 'nav-tab__active' : '');

const NavTabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    background-image: url(${(props) => props.iconPath.normal});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    &:hover {
      background-image: url(${(props) => props.iconPath.hover});
    }
    &:active {
      background-image: url(${(props) => props.iconPath.hover});
    }
  }
  .nav-tab__active {
    background-image: url(${(props) => props.iconPath.hover});
  }
`;

const NavTab = (props) => {
  const {
    page,
    iconPath,
  } = props;
  const handleRedirect = (event) => {
    const pagePath = findAttributeInEvent(event, 'data-page-path');
    history.push(`/${pagePath}`);
  };
  const isActive = window.location.pathname.includes(page.name);
  return (
    <NavTabWrapper iconPath={iconPath} data-page-path={page.name} onClick={handleRedirect}>
      <div className={`nav-tab__image ${setNavTabActive(isActive)}`} />
      <div>{page.text}</div>
    </NavTabWrapper>
  );
};

NavTab.propTypes = {
  page: PropTypes.object.isRequired,
  iconPath: PropTypes.object.isRequired,
};

export default NavTab;
