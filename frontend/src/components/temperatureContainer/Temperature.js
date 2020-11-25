import React, {useEffect} from 'react'
import { Table } from 'semantic-ui-react'
import axios from 'axios';
import TemperatureButtons from '../buttons/TemperatureButtons'
import './Temperature.css';
import classNames from "classnames";

const TemperatureGrid = (props) => {
  const {readings, sensors, setReadings, setSensors, units, setUnits, open, setOpen} = props;
  
  useEffect(() => {
    getReadings();
    getSensors();
  }, []);
  
  const getReadings = () => {
    axios.get('readings-api')
    .then((response) => {
      setReadings(response.data);
    })
    .catch((error) => {
      console.log('Error from getting readings', error);
    });
  };
  
  const getSensors = () => {
    axios.get('sensors-api')
    .then((response) => {
      setSensors(response.data);
    })
    .catch((error) => {
      console.log('Error from getting sensors', error);
    });
  };

  /* Generates Table Rows with the correct data based on sensor type and readings data*/
  const renderRows = (readings, sensors) => {
    if (sensors) {
      const result = [];
      for (const sensor of sensors) {
        if (sensor.type === 'Temperature Sensor') {
          for (const reading of readings) {
            if (reading.sensorId === sensor.id) {
              result.push(
                <Table.Row key = {result.length}>
                  <Table.Cell>{sensor.name}</Table.Cell>
                  <Table.Cell>{reading.value.toFixed(1) + units}</Table.Cell>
                  <Table.Cell>{reading.time}</Table.Cell>
                </Table.Row>
              );
            };
          };
        };
      };
      return result;
    };
  }
      
  return (
    <div className='tempTable'>
      <Table celled fixed >
      <Table.Header>
          <Table.HeaderCell>Temperature Readings</Table.HeaderCell>
          <Table.HeaderCell>
          </Table.HeaderCell>
          <Table.HeaderCell>
            <TemperatureButtons
              units = {units}
              setUnits = {setUnits}
              readings = {readings}
              setReadings = {setReadings}
            />
          </Table.HeaderCell>
      </Table.Header>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Thermostats</Table.HeaderCell>
          <Table.HeaderCell>Temperature</Table.HeaderCell>
          <Table.HeaderCell>Time of Reading</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
        <Table.Body>
          {renderRows(readings, sensors)}
        </Table.Body>
      </Table>
    </div>
  );
}

export default TemperatureGrid;