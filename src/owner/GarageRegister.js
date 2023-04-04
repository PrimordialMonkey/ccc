import React from 'react'
import Info from '../components/Info'
import { TextField } from '@mui/material';
import Sidebar from '../components/sidebar';
import { Box } from '@mui/system';
import { Button } from 'bootstrap';
import '../components/comp.css';
import { UilLocationPoint } from '@iconscout/react-unicons'
import HorizontalLine from '../components/HorizontalLine';
import { useState } from 'react';
import PinLocation from '../PinLocation';
import { useNavigate } from 'react-router-dom';
import { doc, addDoc, collection , setDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import {auth, db} from '../firebase/firebase';
import { async } from 'q';
import ImageUpload from '../components/ImageUpload';

const GarageRegister = () => {


  const [name, setName] = useState('');
  const [openDate, setOpenDate] = useState('');
  const [time, setTime] = useState('');
  const [capacity, setCapacity] = useState('');
  const [imgUrl, setImgUrl] = useState('');


  const garageRef = collection(db, "garage");

  let navigate = useNavigate();
  
  const createGarage = async() => {
    if(name === '' || openDate === '' || time === '' || capacity === '')
    {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return false;
    }
    else
    {
        try{
            const docRef = await addDoc(garageRef, {
                name,
                openDate,
                time,
                capacity,
                imgUrl,
                user:{
                    email: auth.currentUser.email,
                    id: auth.currentUser.uid,
                }
            });
            navigate('/owner/employee', {replace : true});
            console.log(auth);
            console.log(docRef.id);
            console.log(imgUrl)
          } 
          catch(error)
          {
            console.log(error);
          }
    }
}
    const handleCancel = () => {
        navigate('/owner/garage', {replace : true});
    }
  return (


    <div className='profile-bg'>
      <Info />
      
      <h3 style={{marginLeft : 120, marginTop: 20, fontSize : 24}}>
        ข้อมูลทั่วไป
        <HorizontalLine color='black'/>
        <ImageUpload onChange={(e) => setImgUrl(e.target.value)}/>
        
        <Box sx = {{width : 200}}>
        <h4 style={{marginTop : 20, fontSize : 20}}>ชื่ออู่</h4>
        <input type='text' className='form-control' placeholder='ชื่ออู่' onChange={(e) => setName(e.target.value)} />
        </Box>

        <Box>
            <h4 style={{marginTop : 40, fontSize : 20}}>ตำแหน่งที่ตั้ง</h4>
            <PinLocation />
            <span>
              <h4 style={{paddingTop: 20, fontSize : 20}}>วันเปิดทำการ</h4>
              <input style={{width: 300}} type='text' className='form-control' placeholder='(เช่น จันทร์ - ศุกร์)' onChange={(e) => setOpenDate(e.target.value)} />
            </span>
            <span style={{display : 'flex', flexDirection : 'row'}}>
                <span>
                    <h4 style={{marginTop : 40, fontSize : 20}}>เวลาเปิด-ปิด</h4>
                    <input type='text' className='form-control' placeholder='(เช่น 8.00 - 17.00)' onChange={(e) => setTime(e.target.value)} />
                </span>
                <span style={{marginLeft : 40}}>
                    <h4 style={{marginTop : 40, fontSize : 20}}>จำนวนรถที่สามารถบรรจุได้</h4>
                    <input type='text' className='form-control' placeholder='(เช่น 10 คัน)' onChange={(e) => setCapacity(e.target.value)} />
                </span>
            </span>
      </Box>

      <button style={{marginTop: 40}} onClick={createGarage} type="button" className="btn btn-outline-success">ยืนยัน</button>
      <button style={{marginTop: 40}} onClick={handleCancel} type="button" className="btn btn-outline-danger">ยกเลิก</button>

      </h3>


    </div>
  )
}

export default GarageRegister
