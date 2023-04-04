import React, { useState } from 'react';
import Info from './Info';
import {Link, useLocation, useParams} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import ImageUpload from './ImageUpload';
import CustomerCar from './CustomerCar';
import { useNavigate } from 'react-router-dom';
import { getDoc, doc, addDoc, collection , setDoc, query, where, getDocs, updateDoc } from 'firebase/firestore';
import {auth, db} from '../firebase/firebase';
import { async } from 'q';
import './comp.css'

const CarEdit = () => {
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [cap, setCap] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [plate, setPlate] = useState('');
    const [wheels, setWheels] = useState('');

    const params = useParams();

  let navigate = useNavigate();

  
  const updateCar = async() => {
    if(year === '' || color === '' || cap === '' || brand === '' || model === '' || plate === '' || wheels === '')
    {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return false;
    }
    else
    {
      
      const car = doc(db, "cars", params.id);

      await updateDoc(car, {
          year,
          color,
          cap,
          brand,
          model,
          plate,
          wheels,
          user:{
              email: auth.currentUser.email,
              id: auth.currentUser.uid,
          }
        });
       
        console.log(auth);
        navigate('/customer/profile', {replace : true});
    }
}
    const handleCancel = () => {
        navigate('/customer/profile', {replace : true});
    }

    console.log(params);
  
  
  
  return (
    <div className='profile-bg'>
      <Info/>
      <div className='cusCarList'>
        <input type='text' className='form-control' placeholder='ปีของรถ' onChange={(e) => setYear(e.target.value)} />
        <input type='text' className='form-control' placeholder='สีรถ' onChange={(e) => setColor(e.target.value)} />
        <input type='text' className='form-control' placeholder='จำนวนที่นั่ง' onChange={(e) => setCap(e.target.value)} />
        <input type='text' className='form-control' placeholder='ยี่ห้อรถ' onChange={(e) => setBrand(e.target.value)} />
        <input type='text' className='form-control' placeholder='รุ่นของรถ' onChange={(e) => setModel(e.target.value)} />
        <input type='text' className='form-control' placeholder='ทะเบียนรถ' onChange={(e) => setPlate(e.target.value)} />
        <input type='text' className='form-control' placeholder='ชนิดของล้อ' onChange={(e) => setWheels(e.target.value)}/>
      </div>
    
      
      <button className='btn' onClick={updateCar} style={{marginLeft: 80}}>ยืนยัน</button>
      <button className='btn' onClick={handleCancel} style={{marginLeft: 80}}>ยกเลิก</button>
      
    </div>
  )
}


export default CarEdit