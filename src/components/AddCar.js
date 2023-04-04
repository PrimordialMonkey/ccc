import React, { useState } from 'react';
import Info from './Info';
import {Link} from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import ImageUpload from './ImageUpload';
import CustomerCar from './CustomerCar';
import { useNavigate } from 'react-router-dom';
import { doc, addDoc, collection , setDoc } from 'firebase/firestore';
import {auth, db} from '../firebase/firebase';
import { async } from 'q';


const CarEdit = () => {
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [cap, setCap] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [plate, setPlate] = useState('');
  const [wheels, setWheels] = useState('');

  let navigate = useNavigate();

  const carCollectionRef = collection(db, "cars");
  
  const createCar = async() => {
    if(year === '' || color === '' || cap === '' || brand === '' || model === '' || plate === '' || wheels === '')
    {
      alert("โปรดกรอกข้อมูลให้ครบ");
      return false;
    }
    else
    {
      try{
        const docRef = await addDoc(carCollectionRef, {
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
        navigate('/customer/profile', {replace : true});
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
    navigate('/customer/profile', {replace : true});
}
  
  
  
  return (
    <div className='profile-bg wrapper'>
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
      <button className='btn' onClick={createCar} style={{marginLeft: 80}}>ยืนยัน</button>
      <button className='btn' onClick={handleCancel} style={{marginLeft: 80}}>ยกเลิก</button>
    </div>
  )
}


export default CarEdit
