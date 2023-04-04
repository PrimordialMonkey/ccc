import React, {useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'


import './Bar.css'

function Bar() {
  return (
    <dir className="bar-container">
      <h1 className="car-chace"><FontAwesomeIcon icon={faScrewdriverWrench} size="lg"/> Fixxed</h1>
    </dir>
    
  )
}

export default Bar