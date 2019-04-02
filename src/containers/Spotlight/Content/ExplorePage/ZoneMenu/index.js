import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { zones } from './constants';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const ZoneMenu = ({ history, location }) => {
  const [zonesState] = useReducer(reducer, fromJS(zones));

  const regions = zonesState.map((zone) => zone.get('region')).toSet();

  return (
    <div>
      {regions
        .map(
          (region) => (
            <div key={region}>
              <div>{region}</div>
              <ul>
                {zonesState
                  .filter((zone) => zone.get('region') === region)
                  .map((zone) => <li key={zone.get('name')}>{zone.get('name')}</li>)
                  .toList()
                }
              </ul>
            </div>
          ),
        )
      }
      <button type="button" onClick={() => history.push(location.pathname)}>
        關閉
      </button>
    </div>
  );
};

ZoneMenu.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default ZoneMenu;
