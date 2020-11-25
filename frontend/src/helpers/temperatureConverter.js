/* Checks for current units state and updates the units state and temperature readings, 
  readings are only updated for thermostat sensors */
const temperatureConverter = (units, setUnits, temperatureReadings, setTemperatureReadings) => {
  if (units === '°C') {
    for (const reading of temperatureReadings) {
      if (reading.sensorId === 1 || reading.sensorId === 3) {
        reading.value = ((reading.value/5) * 9) + 32;
      }
    }
    setTemperatureReadings(temperatureReadings);
    setUnits('°F');
  } else if (units === '°F') {
    for (const reading of temperatureReadings) {
      if (reading.sensorId === 1 || reading.sensorId === 3) {
        reading.value = ((reading.value - 32) * 5) / 9;
      }
    }
    setTemperatureReadings(temperatureReadings);
    setUnits('°C');
  }
}

export default temperatureConverter;