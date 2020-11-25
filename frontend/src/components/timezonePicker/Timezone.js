import React from 'react';
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
import './Timezone.css';
import timezones from '../../helpers/timezones'

function Timezone(props) {
  const { setTimezone } = props;
  
  const handleChange = (picked) => {
    setTimezone(picked);
  };
  
  return (
    <div className='timezone'>
      <h4>
        Select Your Timezone - 
      </h4>
      <TimezonePicker
        className = 'picker'
        placeholder = 'Set Timezone...'
        absolute = {true}
        timezones = {timezones}
        onChange = {handleChange}
      />
    </div>
  );
}

export default Timezone;