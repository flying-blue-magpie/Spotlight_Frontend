import { fromJS } from 'immutable';
import { getDistance } from 'utils/distance';
import moment from 'moment';

export const getTravelingData = (props) => {
  const {
    spotIds,
    dayStartTime,
    spots,
    arrange,
  } = props;
  const spotsData = spotIds.map((sid, index) => {
    const carSpeed = 30; // km/hr
    const walkSpeed = 10; // km/hr

    const distance = index === (spotIds.size - 1)
      ? 0
      : getDistance(
        spots.getIn([spotIds.get(index).toString(), 'px']),
        spots.getIn([spotIds.get(index).toString(), 'py']),
        spots.getIn([spotIds.get(index + 1).toString(), 'px']),
        spots.getIn([spotIds.get(index + 1).toString(), 'py']),
      ) / 1000; // km

    const driveTime = distance / carSpeed; // hr
    const walkTime = distance / walkSpeed; // hr
    const during = arrange.find((arr) => arr.get('spot_id') === sid).get('during');

    return fromJS({
      id: sid,
      during,
      driveTime,
      walkTime,
      driveTimeText: `${Math.round(distance / carSpeed)}時${Math.floor(((distance / carSpeed) - Math.floor(distance / carSpeed)) * 60)}分`,
      walkTimeText: `${Math.round(distance / walkSpeed)}時${Math.floor(((distance / walkSpeed) - Math.floor(distance / walkSpeed)) * 60)}分`,
    });
  });

  let startTime;
  let endTime;
  const travelingData = spotIds.map((sid, index) => {
    if (index === 0) {
      startTime = moment(dayStartTime, 'HH:mm:ss').format('HH:mm');
      const during = spotsData.find((data) => data.get('id') === spotIds.get(index)).get('during');
      endTime = moment(startTime, 'HH:mm:ss')
        .add(during, 'minutes').format('HH:mm');
    } else {
      const driveTime = spotsData.find((data) => data.get('id') === spotIds.get(index - 1)).get('driveTime');
      const during = spotsData.find((data) => data.get('id') === spotIds.get(index)).get('during');
      startTime = moment(endTime, 'HH:mm:ss')
        .add(driveTime, 'hours');
      endTime = moment(startTime, 'HH:mm:ss')
        .add(during, 'minutes');
    }

    return fromJS({
      id: sid,
      startTime: moment(startTime, 'HH:mm:ss').format('HH:mm'),
      endTime: moment(startTime, 'HH:mm:ss')
        .add(spotsData.find((data) => data.get('id') === sid).get('during'), 'minutes').format('HH:mm'),
      driveTimeText: moment('00:00', 'HH:mm').add(spotsData.find((data) => data.get('id') === sid).get('driveTime'), 'hours').format('HH時mm分'),
      walkTimeText: moment('00:00', 'HH:mm').add(spotsData.find((data) => data.get('id') === sid).get('walkTime'), 'hours').format('HH時mm分'),
    });
  });

  return travelingData;
};
