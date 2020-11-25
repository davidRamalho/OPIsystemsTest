import React, {useEffect} from 'react'
import { Icon, Table } from 'semantic-ui-react'
import axios from 'axios';
import HumidityButton from '../buttons/HumidityButton'
import './Humidity.css';

const HumidityGrid = (props) => {
  const {readings, sensors, setReadings, setSensors} = props;
  
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

  const renderRows = (readings, sensors) => {
    if (sensors) {
      const result = [];
      for (const sensor of sensors) {
        if (sensor.type === 'Humidity Sensor') {
          for (const reading of readings) {
            if (reading.sensorId === sensor.id) {
              result.push(
                <Table.Row key = {result.length}>
                  <Table.Cell>{sensor.name}</Table.Cell>
                  <Table.Cell>{reading.value.toFixed(1) + '%'}</Table.Cell>
                  <Table.Cell>{reading.time}</Table.Cell>
                </Table.Row>
              );
            };
          };
          if ( sensor.id === 4 ) {
            result.push(
              <Table.Row key = {result.length}>
                <Table.Cell>{sensor.name}</Table.Cell>
                <Table.Cell negative> <Icon name='close' /><a href='http://www.advancedgrainmanagement.com/customer-care/' target="_blank">No Readings Please Contact Customer Care</a></Table.Cell>
                <Table.Cell negative> <Icon name='close' /><a href='http://www.advancedgrainmanagement.com/customer-care/' target="_blank">No Readings Please Contact Customer Care</a></Table.Cell>
              </Table.Row>
            );
          }
        };
      };
      return result;
    };
  }
      
  return (
    <div className='tempTable'>
      <Table celled fixed >
      <Table.Header>
          <Table.HeaderCell>Humidity Readings</Table.HeaderCell>
          <Table.HeaderCell></Table.HeaderCell>
          <Table.HeaderCell>
            <HumidityButton/>
          </Table.HeaderCell>
      </Table.Header>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Humidifiers</Table.HeaderCell>
          <Table.HeaderCell>Humidity</Table.HeaderCell>
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

export default HumidityGrid;