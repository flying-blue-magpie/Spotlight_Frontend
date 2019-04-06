import React from 'react';
import PropTypes from 'prop-types';
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
    background-size: cover;
    &:hover {
      background-image: url(${(props) => props.iconPath.hover});
    }
    &:active {
      background-image: url(${(props) => props.iconPath.hover});
    }
  }
`;

const NavTab = (props) => {
  const {
    title,
    iconPath,
  } = props;
  const handleRedirect = (event) => {
    const pagePath = findAttributeInEvent(event, 'data-page-path');
    history.push(`/${pagePath}`);
  };

  return (
    <NavTabWrapper iconPath={iconPath} data-page-path={title} onClick={handleRedirect}>
      <div className="nav-tab__image" />
      <div>{title}</div>
    </NavTabWrapper>
  );
};

NavTab.propTypes = {
  title: PropTypes.string.isRequired,
  iconPath: PropTypes.object.isRequired,
};

export default NavTab;
