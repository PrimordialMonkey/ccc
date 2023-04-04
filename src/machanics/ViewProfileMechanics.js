import React from 'react';
import Sidebar from '../components/sidebar';
import HorizontalLine from '../components/HorizontalLine';
import { MenuItem, TextField } from '@mui/material';
import '../components/comp.css';
import { Box } from '@mui/system';
import { ArrowLeft } from "react-bootstrap-icons";
import Info from '../components/Info';
import EmployeeView from '../components/EmployeeView';
import { useParams, useNavigate } from 'react-router-dom';
import { query, collection, getDocs, where, getDoc, doc, onSnapshot  } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase';
import { useState, useEffect } from 'react';

const ViewProfileMechanics = () => {
  let navigate = useNavigate();
  const params = useParams();
  const [employees, setEmployees] = useState([]);

  const [thName, setThName] = useState('');
  const [engName, setEngName] = useState('');
  const [thNickname, setThNickname] = useState('');
  const [engNickname, setEngNickname] = useState('');
  const [age, setAge] = useState('');
  const [role, setRole] = useState('');
  const [tel, setTel] = useState('');
  const [status, setStatus] = useState('');
  const [id, setId] = useState('');

  
  const employeeRef = doc(db, "employee", params.id);
  getDoc(employeeRef)
    .then((doc) => {
      setThName(doc.data().thName);
      setEngName(doc.data().engName)
      setThNickname(doc.data().thNickname)
      setEngNickname(doc.data().engNickname)
      setAge(doc.data().age)
      setRole(doc.data().role)
      setTel(doc.data().tel)
      setStatus(doc.data().status)
      setId(doc.data().id)
    })
    
      
    const handleBack= () => {
      navigate('/owner/employee', {replace: true});
    }

    

    const handleDelete = () => {
      navigate('/owner/main', {replace : true});
  }
  const handleEdit = () => {
    navigate('/owner/editemployee/' + params.id, {replace: true})
  }

  

  return (
    <div className='profile-bg'>
      
      <Info />
        <Sidebar />
        <span style={{marginLeft: 100}}>
            <EmployeeView thName={thName} 
              engName={engName} 
              thNickname={thNickname} 
              engNickname={engNickname} 
              role={role} 
              tel={tel} 
              status={status} 
              age={age}
              id={id} />
        </span>
        <span className='spacing-between' style={{display : 'flex', flexDirection : 'row', marginLeft: '60px', marginTop: '-49px'}}>
            <button style={{width : 180, marginTop: 100, marginRight : 40, height : 40, outline:'none', fontWeight: 'bold'}} onClick={handleBack} type='button' class = "btn" >
                <ArrowLeft style={{width : 50, marginBottom: 5}}/>
                <label style={{fontSize: 20, marginRight : 20, marginTop : -2, cursor: 'pointer'}} onClick={handleBack}>ย้อนกลับ</label>
                
            </button>
            <button style={{height: 40, marginTop: 100}} type="button" className="btn btn-outline-warning" onClick={handleEdit}>แก้ไข</button>
        </span>
        
        
      
    </div>
  )
}
export default ViewProfileMechanics
