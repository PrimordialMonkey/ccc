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
import { useNavigate } from 'react-router-dom';
import ImageUploader from '../components/ImageUploader';


const AddEmployee = () => {
    const carCollectionRef = collection(db, "cars");

  const [thName, setThName] = useState('');
  const [engName, setEngName] = useState('');
  const [thNickname, setThNickname] = useState('');
  const [engNickname, setEngNickname] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [tel, setTel] = useState('');
  const [status, setStatus] = useState('');

  const employeeRef = collection(db, "employee");
  let navigate = useNavigate();
  
  const createEmployee = async() => {
    if(thName === '' || engName === '' || thNickname === '' || engNickname === '' || age === '' || role === '' || status === '' || tel === '')
    {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return false;
    }
    else
    {
        try{
            const docRef = await addDoc(employeeRef, {
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
            navigate('/owner/employee', {replace : true});
            console.log(auth);
            console.log(docRef.id);
            
          } 
          catch(error)
          {
            console.log(error);
          }
    }
}
    const handleCancel = () => {
        navigate('/owner/employee', {replace : true});
    }

  return (
    <div className='profile-bg'>
      <ImageUploader />
      <h3 className='temp-h3'>
        แก้ไขข้อมูลพนักงาน
        <HorizontalLine color='black'/>

        <span className='spacing-between' style={{fontSize : 20}}>รหัสพนักงาน</span>
        <input type='text' style={{width: 300}} className='form-control' placeholder='รหัสพนักงาน' />
        <span className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อพนักงาน</span>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 500}}>
          <input type='text' className='form-control' placeholder='ชื่อ-นามสกุลภาษาไทย' onChange={(e) => setThName(e.target.value)} />
          </Box>
          
        </span>

        <span className='spacing-between' style={{fontSize : 20, marginBottom : 20}}>ชื่อภาษาอังกฤษ</span>
        <span className='rowC' style={{fontSize : 20}}>
          <Box sx = {{width : 500}}>
          <input type='text' className='form-control' placeholder='ชื่อ-นามสกุลภาษาอังกฤษ' onChange={(e) => setEngName(e.target.value)} />
          </Box>
          
          
          
        </span>
        
        <span className='rowC'>
          <span>
            <span className='generic-font spacing-between'>ชื่อเล่น</span>
            <input type='text' className='form-control' placeholder='ชื่อเล่นภาษาไทย' onChange={(e) => setThNickname(e.target.value)} />
          </span>
          <span style={{marginLeft : 40}}>
            <span className='generic-font spacing-between' >ชื่อเล่นภาษาอังกฤษ</span>
            <input type='text' className='form-control' placeholder='ชื่อเล่นภาษาอังกฤษ' onChange={(e) => setEngNickname(e.target.value)} />
          </span>
        </span>


        <span className='rowC'>
          <span  className='spacing'>
            <span className='generic-font spacing-between'>อายุ</span>
            <input type='text' className='form-control' placeholder='อายุ' onChange={(e) => setAge(e.target.value)} />
          </span>
          <span  className='spacing'>
            <span className='generic-font spacing-between'>ตำแหน่งงาน</span>
            <input type='text' className='form-control' placeholder='ตำแหน่งงาน' onChange={(e) => setRole(e.target.value)} />
          </span>
          <span  className='spacing'>
            <span className='generic-font spacing-between'>เบอร์ติดต่อ</span>
            <input type='text' className='form-control' placeholder='เบอร์โทร' onChange={(e) => setTel(e.target.value)} />
          </span>
        </span>
        
        <span className='generic-font spacing-between'>สถานะ</span>
        <Box sx = {{width : 200}}>
        <input type='text' className='form-control' placeholder='เบอร์โทร' onChange={(e) => setStatus(e.target.value)} />
        </Box>

        <span className='spacing-between' style={{display : 'flex', flexDirection : 'row', marginLeft: '-5px'}}>
          <button style={{marginTop: 20, width : 70}} type="button" className="btn btn-outline-success" onClick={createEmployee}>ยืนยัน</button>
          <button style={{marginTop: 20, marginLeft: 20, width : 70}} type="button" className="btn btn-outline-danger" onClick={handleCancel}>ยกเลิก</button>
        </span>
      </h3>
    </div>
  )
}

export default AddEmployee
