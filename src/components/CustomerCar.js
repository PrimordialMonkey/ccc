import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material';
import cartest from './cartest.jpg';
import test from './test.jpeg';
import { Link, Route, Routes } from 'react-router-dom';

const CustomerCar = ({year, color, cap, brand, model, plate, wheels, id}) => {

  const Year = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Year</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{year}</h4>
      </div>
      </Box>
    )

  }
  const Color = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Color</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{color}</h4>
      </div>
      </Box>
    )

  }

  const Cap = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Seats</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{cap}</h4>
      </div>
      </Box>
    )
  }

  const Brand = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Brand</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{brand}</h4>
      </div>
      </Box>
    )
  }

  const Model = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Model</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{model}</h4>
      </div>
      </Box>
    )
  }

  const PlateNo = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Plate No.</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{plate}</h4>
      </div>
      </Box>
    )
  }

  const WheelType = () => {
    return(
      <Box style={{backgroundColor: 'rgba(0,0,0,0.0)'}} width='90px' height='80px'>
      <div className='spacing'>
        <h3 style = {{textAlign: 'left', fontSize: 20}}>Wheels</h3>
        <h4 style = {{textAlign: 'left', fontSize: 15}}>{wheels}</h4> 
      </div>
      </Box>
    )
  }

  return (
    <div style={{justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.0)'}}>
      <h1 style={{marginBottom:'0.1rem', fontSize: 20}}>Car Details</h1>
      <img src = {test} />
      <div className='rowC'>
        {Year()}
        {Color()}
        {Cap()}
      </div>
      <div className='rowC' >
        {Brand()}
        {Model()}
        {PlateNo()} 
      </div>
      <div className='rowC'>
        {WheelType()}
      </div>
      <span className='rowC' style={{marginTop: -20}}>
        <Link to={"/customer/profile/editcar/" + id} style={{fontSize: 15}}>แก้ไข</Link>
        <Link to="/" style={{fontSize: 15, marginLeft: 20}}>ลบ</Link>
      </span>
      
    </div>

    
    
  )
}



export default CustomerCar
