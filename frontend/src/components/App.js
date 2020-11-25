import './App.css';
import React, { useState, useEffect } from 'react';
import Temperature from './temperatureContainer/Temperature';
import Humidity from './humidityContainer/Humidity';
import Header from './header/Header';
import timezoneConverter from '../helpers/timezoneConverter'
import temperatureConverter from '../helpers/temperatureConverter'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [readings, setReadings] = useState(null);
  const [sensors, setSensors] = useState(null);
  const [timezone, setTimezone] = useState('');
  const [data, setData] = useState([]);
  const [units, setUnits] = useState('°C');
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
    if (readings) {
      if (readings[0].time.length === 17) {
        setData(readings)
        timezoneConverter(timezone, readings, setReadings);
      }
      if (units === '°F') {
        temperatureConverter(units, setUnits, readings, setReadings);
      }
    }
    if(readings && readings[0].time.length !== 17) {
      timezoneConverter(timezone, data, setReadings);
    }
  }, [timezone]);
  
  
    
  return (
    <>
      <Header
        timezone = {timezone}
        setTimezone = {setTimezone}
      />
      <Temperature 
        units = {units}
        setUnits = {setUnits}
        readings = {readings}
        sensors = {sensors}
        setReadings = {setReadings}
        setSensors = {setSensors}
        open = {open}
        setOpen = {setOpen}
      />
      <Humidity 
        units = {units}
        setUnits = {setUnits}
        readings = {readings}
        sensors = {sensors}
        setReadings = {setReadings}
        setSensors = {setSensors}
        open = {open}
        setOpen = {setOpen}
      />
    </>
  );
}

export default App;
