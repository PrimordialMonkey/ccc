import React, { useState } from 'react';
import Sidebar from '../components/sidebar';
import HorizontalLine from '../components/HorizontalLine';
import { MenuItem, TextField } from '@mui/material';
import '../components/comp.css';
import { Box } from '@mui/system';
import './chief.css';
import { doc, addDoc, collection , setDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import {auth, db} from '../firebase/firebase';
import { async } from 'q';
import { useNavigate, useParams } from 'react-router-dom';



const EditEmployee = () => {


  let navigate = useNavigate();
  const params = useParams();

  const [thName, setThName] = useState('');
  const [engName, setEngName] = useState('');
  const [thNickname, setThNickname] = useState('');
  const [engNickname, setEngNickname] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [tel, setTel] = useState('');
  const [status, setStatus] = useState('');
  
  const updateEmployee = async() => {
    if(thName === '' || engName === '' || thNickname === '' || engNickname === '' || age === '' || role === '' || status === '' || tel === '')
    {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return false;
    }
    else
    {
      const employee = doc(db, "employee", params.id);

      await updateDoc(employee, {
        thName,
        engName,
        thNickname,
        engNickname,
        age,
        role,
        tel,
        status,
        user:{
          email: auth.currentUser.email,
          id: auth.currentUser.uid,
        }
            
        });
        console.log(auth);
        navigate('/owner/employee', {replace : true});
        
        
    }
}
    const handleCancel = () => {
        navigate('/owner/employee', {replace : true});
    }

    const handleDelete = () => {
      navigate('/owner/main', {replace : true});
  }

  

  return (
    <div className='profile-bg'>
      <button style={{marginLeft:120, marginTop: 20, width:200, height: 200, borderRadius:400/2}} type="button" class="btn btn-outline-secondary">ใส่รูป</button>
      <h3 className='temp-h3'>
        แก้ไขข้อมูลพนักงาน
        <HorizontalLine color='black'/>
        <h4 className='spacing-between generic-font' style={{fontSize : 20, marginBottom : 20}}>รหัสพนักงาน</h4>
        <input type='text' style={{width: 300}} className='form-control' placeholder='รหัสพนักงาน' />
        <h4 className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อพนักงาน</h4>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 500}}>
          <input type='text' className='form-control' placeholder='ชื่อ-นามสกุลภาษาไทย' onChange={(e) => setThName(e.target.value)} />
          </Box>
          
          
        </span>

        <h4 className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อภาษาอังกฤษ</h4>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 500}}>
          <input type='text' className='form-control' placeholder='ชื่อ-นามสกุลภาษาอังกฤษ' onChange={(e) => setEngName(e.target.value)} />
          </Box>
          
          
          
        </span>
        
        <span className='rowC'>
          <span>
            <h4 className='generic-font spacing-between'>ชื่อเล่น</h4>
            <input type='text' className='form-control' placeholder='ชื่อเล่นภาษาไทย' onChange={(e) => setThNickname(e.target.value)} />
          </span>
          <span style={{marginLeft : 40}}>
            <h4 className='generic-font spacing-between' >ชื่อเล่นภาษาอังกฤษ</h4>
            <input type='text' className='form-control' placeholder='ชื่อเล่นภาษาอังกฤษ' onChange={(e) => setEngNickname(e.target.value)} />
          </span>
        </span>


        <span className='rowC'>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>อายุ</h4>
            <input type='text' className='form-control' placeholder='อายุ' onChange={(e) => setAge(e.target.value)} />
          </span>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>ตำแหน่งงาน</h4>
            <input type='text' className='form-control' placeholder='ตำแหน่งงาน' onChange={(e) => setRole(e.target.value)} />
          </span>
          <span  className='spacing'>
            <h4 className='generic-font spacing-between'>เบอร์ติดต่อ</h4>
            <input type='text' className='form-control' placeholder='เบอร์โทร' onChange={(e) => setTel(e.target.value)} />
          </span>
        </span>
        
        <h4 className='generic-font spacing-between'>สถานะ</h4>
        <Box sx = {{width : 200}}>
        <input type='text' className='form-control' placeholder='เบอร์โทร' onChange={(e) => setStatus(e.target.value)} />
        </Box>

        <span className='spacing-between' style={{display : 'flex', flexDirection : 'row', marginLeft: '-5px'}}>
          <button style={{marginTop: 20, width : 70}} type="button" className="btn btn-outline-success" onClick={updateEmployee}>ยืนยัน</button>
          <button style={{marginTop: 20, marginLeft: 20, width : 70}} type="button" className="btn btn-outline-danger" onClick={handleCancel}>ยกเลิก</button>
          <button style={{marginTop: 20, marginLeft: 20, width : 100}} type="button" className="btn btn-outline-warning" onClick={handleDelete}>ลบบัญชี</button>
        </span>
      </h3>
    </div>
  )
}

export default EditEmployee
