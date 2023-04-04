import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmployeeButton = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate('/owner/add-employee', {replace: true});
    }
  return (
    <div>
      <button className='green' onClick={handleClick}>เพิ่มรายชื่อ +</button>
    </div>
  )
}

export default AddEmployeeButton
