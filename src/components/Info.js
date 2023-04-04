import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material';
import man from './man.jpeg';
import { Placeholder } from 'react-bootstrap';



const Info = ({userName, contactNumber, customerToken}) => {
  return (
    <Box className='rowC' style={{ height: 275, width: '100%', paddingTop: 20, backgroundColor: 'rgba(255,255,255,0.5)', borderBottomLeftRadius: '150px'}}>
      <img style={{marginTop: 20, marginLeft: 100, width:200, height:200, borderRadius:400/2}} src = {man}></img>
      <span style={{margin:40}}>
      <h1>{userName}</h1>
      <h2>{contactNumber}</h2>
      <h3>id token : {customerToken}</h3>
      </span>
    </Box>
  )
}

Info.defaultProps = {
    userName: 'Guest',
    contactNumber: '',
    customerToken: 'N/A',
}

export default Info
