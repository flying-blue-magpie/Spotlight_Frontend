import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import message from 'antd/lib/message';
import {
  HeaderLeftButtons,
  HeaderLinkButton,
  HeaderTitle,
  HeaderRightButtons,
} from 'containers/Spotlight/Header/Styled';
import { PAGE_NAME } from 'Styled/Settings/constants';
import { zoneReducer } from '../reducer';
import {
  HeaderContainer,
  Region,
  ZoneLabel,
  Container,
} from './Styled';

const ZoneMenu = ({
  zonesState,
  dispatch,
}) => {
  const [editZonesState, dispatchEdit] = useReducer(zoneReducer, zonesState);
  const regions = editZonesState.map((zone) => zone.get('region')).toSet();

  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftButtons>
          <HeaderLinkButton to={`/${PAGE_NAME.EXPLORE.name}`}>
            <i className="fas fa-times" />
          </HeaderLinkButton>
        </HeaderLeftButtons>
        <HeaderTitle>
          縣市選擇
        </HeaderTitle>
        <HeaderRightButtons>
          <HeaderLinkButton
            to={`/${PAGE_NAME.EXPLORE.name}`}
            onClick={() => dispatch({
              type: 'SET_ZONES',
              payload: editZonesState,
            })}
          >
            <i className="fas fa-check" />
          </HeaderLinkButton>
        </HeaderRightButtons>
      </HeaderContainer>
      {regions.map((region) => (
        <React.Fragment key={region}>
          <Region>{region}</Region>
          {editZonesState
            .filter((zone) => zone.get('region') === region)
            .map((zone) => (
              <ZoneLabel key={zone.get('name')}>
                {zone.get('name')}
                <input
                  type="checkbox"
                  onChange={(event) => {
                    const selectedSize = editZonesState
                      .filter((zoneState) => zoneState.get('selected'))
                      .size;
                    if (selectedSize === 5 && event.currentTarget.checked) {
                      message.warning('最多可選 5 個！', 2);
                      return;
                    }
                    dispatchEdit({
                      type: event.currentTarget.checked ? 'SELECT_ZONE' : 'CANCEL_ZONE',
                      payload: { zone: zone.get('name') },
                    });
                  }}
                  checked={zone.get('selected', false)}
                />
              </ZoneLabel>
            ))
            .toList()
          }
        </React.Fragment>
      ))}
    </Container>
  );
};

ZoneMenu.propTypes = {
  zonesState: PropTypes.instanceOf(Map).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ZoneMenu;
