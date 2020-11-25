import React from 'react'
import { Button } from 'semantic-ui-react'
import './Buttons.css'

const HumidityButton = () => {
  
  return (
    <div className='tempButtons'>
      <a className ='text'>Units</a>
      <Button primary >
        %
      </Button>
    </div>
  )
}

export default HumidityButton;