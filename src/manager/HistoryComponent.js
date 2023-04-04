import React from 'react'
import { Box } from '@mui/system'
import './HistoryComp.css';
import { useState , useEffect } from 'react';


const HistoryComponent = () => {

  
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(window.localStorage.getItem('currentDate'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('currentDate', currentDate);  
  }, [currentDate]);

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    var sec = new Date().getSeconds(); 
    if(parseInt(date) < 10)
      date = '0' + date;
    if(parseInt(hours) < 10)
      hours = '0' + hours;
    if(parseInt(min) < 10)
      min = '0' + min;

    if(parseInt(month) < 10)
      month = '0' + month;
    if(parseInt(sec) < 10)
      sec = '0' + sec;

    setCurrentDate(
      date + '/' + month + '/' + year 
      + ' ' + hours + ':' + min + ':' + sec

      
    );

  }, []);

  
    return (
      <div>
      <Box className = 'history-box'>
        <p style={{marginLeft : 40, flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"80px"}}>{currentDate}</p>
      </Box>
    </div>
    );
  }

export default HistoryComponent
