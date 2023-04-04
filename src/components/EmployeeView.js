import React from 'react'
import { Box } from '@mui/material';

const EmployeeView = ({thName,engName, thNickname,engNickname, age, role, tel, status, id}) => {

    const THName = () => {
       return( 
            <>
            <h4 className='generic-font spacing-between' style={{marginBottom: 20, fontWeight: 'bold' }}>ชื่อพนักงาน</h4>
            <span className='generic-font rowC'>
               <Box sx={{ width: 500 }}>
                   {thName}
               </Box>
            </span>
           </>
        )
    }
    const ENGName = () => {
        return( 
            <>
            <h4 className='generic-font spacing-between' style={{ marginBottom: 20, fontWeight: 'bold' }}>ชื่อภาษาอังกฤษ</h4>
            <span className='rowC generic-font'>
               <Box sx={{ width: 500 }}>
                   {engName}
               </Box>
            </span>
           </>
        )
    }

    const Nickname = () => {
        return( 
            <span className='rowC'>
              <span className='generic-font'>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>ชื่อเล่น</h4>
                {thNickname}
              </span>
              <span className='generic-font' style={{marginLeft : 40}}>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>ชื่อเล่นภาษาอังกฤษ</h4>
                {engNickname}
              </span>
            </span>
        )
    }

    const ART = () => {
        <span className='rowC'>
              <span  className='spacing generic-font'>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>อายุ</h4>
                {age}
              </span>
              <span  className='spacing generic-font'>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>ตำแหน่งงาน</h4>
                {role}
              </span>
              <span  className='spacing generic-font'>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>เบอร์ติดต่อ</h4>
                {tel}
              </span>
            </span>
    }

    const Status = () => {
        return(
            <span className='rowC'>
            <span className='spacing generic-font'>
                <h4 className='generic-font spacing-between' style={{fontWeight: 'bold'}}>สถานะ</h4>
                {status}
            </span>
            {/* <span className='spacing'>
                <h4 className='generic-font spacing-between' >ID</h4>
                {id}
            </span> */}

            </span>
        )
    }
    return (
        <div style={{marginLeft: 200}}>
            {THName()}
            {ENGName()}
            {Nickname()}
            {ART()}
            {Status()}
        </div>
      )
}

export default EmployeeView
