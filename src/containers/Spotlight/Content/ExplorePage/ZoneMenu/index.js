import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Region, ZoneLabel } from './Styled';

const ZoneMenu = ({
  history,
  location,
  zonesState,
  dispatch,
}) => {
  const regions = zonesState.map((zone) => zone.get('region')).toSet();

  return (
    <div>
      {regions.map((region) => (
        <div key={region}>
          <Region>{region}</Region>
          {zonesState
            .filter((zone) => zone.get('region') === region)
            .map((zone) => (
              <ZoneLabel key={zone.get('name')}>
                {zone.get('name')}
                <input
                  type="checkbox"
                  onChange={(event) => dispatch({
                    type: event.currentTarget.checked ? 'SELECT_ZONE' : 'CANCEL_ZONE',
                    payload: { zone: zone.get('name') },
                  })}
                  checked={zone.get('selected', false)}
                />
              </ZoneLabel>
            ))
            .toList()
          }
        </div>
      ))}
      <button type="button" onClick={() => history.push(location.pathname)}>
        關閉
      </button>
    </div>
  );
};

ZoneMenu.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  zonesState: PropTypes.instanceOf(Map).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default ZoneMenu;
