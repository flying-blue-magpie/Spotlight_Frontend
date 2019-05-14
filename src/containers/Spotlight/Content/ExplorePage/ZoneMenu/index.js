import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import message from 'antd/lib/message';
import { useTranslation } from 'react-i18next';
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
  handleSearchRecSpots,
  keyword,
}) => {
  const [editZonesState, dispatchEdit] = useReducer(zoneReducer, zonesState);
  const regions = editZonesState.map((zone) => zone.get('region')).toSet();
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftButtons>
          <HeaderLinkButton to={`/${PAGE_NAME.EXPLORE.name}`}>
            <i className="fas fa-times" />
          </HeaderLinkButton>
        </HeaderLeftButtons>
        <HeaderTitle>
          {t('chooseCounty')}
        </HeaderTitle>
        <HeaderRightButtons>
          <HeaderLinkButton
            to={`/${PAGE_NAME.EXPLORE.name}`}
            onClick={() => {
              dispatch({
                type: 'SET_ZONES',
                payload: editZonesState,
              });
              handleSearchRecSpots({
                kw: keyword,
                zones: editZonesState.filter((zone) => zone.get('selected'))
                  .map((zone) => zone.get('name'))
                  .toList()
                  .toJS(),
              });
            }}
          >
            <i className="fas fa-check" />
          </HeaderLinkButton>
        </HeaderRightButtons>
      </HeaderContainer>
      {regions.map((region) => (
        <React.Fragment key={region}>
          <Region>{t(region)}</Region>
          {editZonesState
            .filter((zone) => zone.get('region') === region)
            .map((zone) => (
              <ZoneLabel key={zone.get('name')}>
                {t(zone.get('name'))}
                <input
                  type="checkbox"
                  onChange={(event) => {
                    const selectedSize = editZonesState
                      .filter((zoneState) => zoneState.get('selected'))
                      .size;
                    if (selectedSize === 5 && event.currentTarget.checked) {
                      message.warning(t('chooseAtMost5'), 2);
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
  handleSearchRecSpots: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default ZoneMenu;
