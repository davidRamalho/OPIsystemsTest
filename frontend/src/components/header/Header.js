import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import Timezone from '../timezonePicker/Timezone';

const AppHeader = (props) => {
  const {timezone, setTimezone} = props;
  return (
    <>
      <Header className='header' as='h1' textAlign='center' block>
        OPI Green - Home Care
      </Header>
      <Timezone
        timezone = {timezone}
        setTimezone = {setTimezone}
      />
    </>
  )
}

export default AppHeader;