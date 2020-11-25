import React from 'react'
import { Button } from 'semantic-ui-react'
import './Buttons.css'
import temperatureConverter from '../../helpers/temperatureConverter'

const TemperatureButtons = (props) => {
  const { units, setUnits, readings, setReadings } = props;

  const handleClick = () => {
    temperatureConverter(units, setUnits, readings, setReadings);
  }

  return (
    <div className='tempButtons'>
      <a className ='text'>Units</a>
      <Button primary onClick = {handleClick}>
        {units}
      </Button>
    </div>
  )
}

export default TemperatureButtons;