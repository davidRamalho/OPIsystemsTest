import React from 'react'
import { Button } from 'semantic-ui-react'
import './Buttons.css'

/*No Functionality on this Button, added simply for consistent styling*/
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