import React from 'react';
import Info from '../components/Info';
import Sidebar from '../components/sidebar';
import HorizontalLine from '../components/HorizontalLine';
import { MenuItem, TextField } from '@mui/material';
import '../components/comp.css';
import { Box } from '@mui/system';

const genderEN = [
  {
    value: '-',
    label: '-',
  },
  {
    value: 'Mr.',
    label: 'Mr.',
  },
  {
    value: 'Mrs.',
    label: 'Mrs.',
  },
  {
    value: 'Ms.',
    label: 'Ms.',
  },
];

const genderTH = [
  {
    value: '-',
    label: '-',
  },
  {
    value: 'Mr.',
    label: 'นาย',
  },
  {
    value: 'Mrs.',
    label: 'นาง',
  },
  {
    value: 'Ms.',
    label: 'นางสาว',
  },
];

const status = [
  {
    value: 'ว่าง',
    label: 'ว่าง',
  },
  {
    value: 'อยู่ระหว่างการทำงาน',
    label: 'อยู่ระหว่างการทำงาน',
  },
  {
    value: 'ลางาน',
    label: 'ลางาน',
  },
];

const EditProfileO = () => {
  return (
    <div className='profile-bg'>
      <Info/>
      <h3 className='temp-h3'>
        แก้ไขข้อมูล
        <HorizontalLine color='black'/>

        <h4 className='spacing-between generic-font' style={{fontSize : 20, marginBottom : 20}}>รหัสพนักงาน</h4>
        <TextField width = '10' style={{fontSize : 20}}/>
        <h4 className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อ</h4>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 100}}>
            <TextField fullWidth id="outlined-select-gender" select label = "คำนำหน้าชื่อ" defaultValue='-'>
              {genderTH.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
            <TextField width = '300' style={{marginLeft : 30}} label = "ชื่อ"/>
            <TextField width = '300' style={{marginLeft : 30}} label = "นามสกุล"/>
          
        </span>

        <h4 className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อภาษาอังกฤษ</h4>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 100}}>
            <TextField fullWidth id="outlined-select-gender" select label = "Name Title" defaultValue='-'>
              {genderEN.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <TextField width = '300' style={{marginLeft : 30}} label = "Name"/>
          <TextField width = '300' style={{marginLeft : 30}} label = "Surname"/>
          
        </span>
        
        <span className='rowC'>
          <span>
            <h4 className='generic-font spacing-between'>ชื่อเล่น</h4>
            <TextField width = '10'/>
          </span>
          <span style={{marginLeft : 40}}>
            <h4 className='generic-font spacing-between'>ชื่อเล่นภาษาอังกฤษ</h4>
            <TextField width = '10'/>
          </span>
        </span>


        <span className='rowC'>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>อายุ</h4>
            <TextField style={{width : 200}} />
          </span>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>ตำแหน่งงาน</h4>
            <TextField style={{width : 500}} />
          </span>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>เบอร์ติดต่อ</h4>
            <TextField style={{width : 300}} />
          </span>
        </span>
        
        <h4 className='generic-font spacing-between'>สถานะ</h4>
        <TextField style={{width : 100}} />

        <span style={{display : 'flex', flexDirection : 'row', marginLeft: '-5px'}}>
          <button style={{marginTop: 20, width : 70}} type="button" class="btn btn-outline-success">ยืนยัน</button>
          <button style={{marginTop: 20, width : 70}} type="button" class="btn btn-outline-danger">ยกเลิก</button>
        </span>
      </h3>
    </div>
  )
}

export default EditProfileO
