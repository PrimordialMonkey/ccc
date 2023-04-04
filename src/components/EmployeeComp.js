import { Box } from '@mui/material'
import React from 'react'
import pencil from './pencil.png';
import { useNavigate } from 'react-router-dom';

const EmployeeComp = ({thName, role, id}) => {

  let navigate = useNavigate();
  const handleEdit = () => {
    navigate("/owner/editemployee/" + id, {replace: true});
  }

  const handleView = () => {
    navigate("/owner/viewemployee/" + id, {replace: true});
  }
    const Name = () => {
      return(
          <h3 style={{cursor: 'pointer'}} onClick={handleView} className='generic-font'>{thName}</h3>
      )
    }
    const Role = () => {
      return(
        <span className='generic-font'>ตำแหน่ง {role}</span>
      )
    }
  return (
    <div>
      <Box className='employee-box'>
        <h3 className='inbox' >
          {Name()}
          {Role()}
          <img src={pencil} className='pencil' onClick={handleEdit} />
        </h3>
      </Box>
    </div>
  )
}

export default EmployeeComp
