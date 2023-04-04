import React from 'react'
import PropTypes from 'prop-types'
import './comp.css'


const Button = ({color, text}) => {
  return (<button 
      className = 'btn'
      style = {{backgroundColor: color}}
      >
      {text}</button>
  )
}

Button.defaultProps = {
  color:'Gray',
  text:'Click'
}


export default Button
