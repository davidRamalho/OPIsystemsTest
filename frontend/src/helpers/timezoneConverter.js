import timezones from './timezones'
import axios from 'axios';
const moment = require('moment-timezone');
const _ = require('lodash');

const timezoneConverter = (timezone, readings, setReadings) => {
  let alteredReadings = [];
  let momentTime;
  
  const getReadings = () => {
    axios.get('readings-api')
    .then((response) => {
      setReadings(response.data);
    })
    .catch((error) => {
      console.log('Error from getting readings', error);
    });
  };
  
  if (readings) {
    alteredReadings = _.map(readings, _.clone);
  }
  
  /* Iterates through the timezones object in order to select the correct timezone 
  to change the readings time to */
  for (const currentTimezone in timezones) {
    if (timezone === timezones[currentTimezone]) {
      if (readings && readings[0].time.length !== 17) {
        getReadings();
        alteredReadings = _.map(readings, _.clone);
      } 
      for (const reading of alteredReadings) {
        switch(timezone) {
          case 'America/Vancouver':
            momentTime = moment(reading.time).tz("America/Vancouver");
            break;
          case 'America/Edmonton':
            momentTime = moment(reading.time).tz("America/Edmonton");
            break;
          case 'America/Regina':
            momentTime = moment(reading.time).tz("America/Regina");
            break;
          case 'America/Toronto':
            momentTime = moment(reading.time).tz("America/Toronto");
            break;
          case 'America/Halifax':
            momentTime = moment(reading.time).tz("America/Halifax");
            break;
          case 'America/St_Johns':
            momentTime = moment(reading.time).tz("America/St_Johns");
            break;
          default:
            break;
        }
          momentTime = moment(momentTime).format('LLL') + ' ' + momentTime.zoneAbbr();
          reading.time = momentTime;
        }
    } 
  }
  setReadings(alteredReadings);
  return alteredReadings;
}

export default timezoneConverter;