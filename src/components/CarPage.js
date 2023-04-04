import React, { useState } from 'react'
import Button from './Button'
import Info from './Info'
import CustomerCar from './CustomerCar'
import TempSidebar from './TempSidebar'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material';
import AddCar from './AddCar'
import { Route, Routes, Link } from 'react-router-dom'
import Sidebar from './sidebar';
import { db, auth } from '../firebase/firebase';
import { getDocs, collection, doc, where, query } from 'firebase/firestore'
import { async } from 'q'
import { useEffect } from 'react';
import './comp.css';


const Header = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    ;(async () => {
      const q = query(collection(db, "cars"), where("user.id", "==", auth.currentUser.uid));

      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    })
    setCars(docs);
    console.log(docs);
  }) ()
},[])

  return (
    
    <div className='profile-bg'>
        <Info />
        <Sidebar />
        <span className='cusCarList' style={{marginLeft: 100}}>
          {cars.map((car) => (
            <CustomerCar key = {car.id} {...car} />
          ))}
        </span>
        
      
    </div>
  )


}

export default Header
