import React, { useState, useEffect } from 'react'
import { Box } from '@mui/system';
import repair from '../components/repair.png';
import EmployeeComp from '../components/EmployeeComp';
import { getDocs, collection, doc, where, query } from 'firebase/firestore'
import { db, auth } from '../firebase/firebase';
import AddEmployeeButton from '../components/AddEmployeeButton';
import '../components/comp.css';
import { ArrowLeft } from "react-bootstrap-icons";
import { useNavigate } from 'react-router-dom';

const EmployeePage = () => {

  const [employees, setEmployees] = useState([]);
  let navigate = useNavigate();

  const handleBack= () => {
    navigate('/owner/home', {replace:true});
  }
  useEffect(() => {
    ;(async () => {
      const q = query(collection(db, "employee"), where("user.id", "==", auth.currentUser.uid));

      const querySnapshot = await getDocs(q);
      const docs = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data.id = doc.id;
      return data;
    })
    setEmployees(docs);
    console.log(docs);
  }) ()
},[])

  return (
      <div className='his-bg'>
        <Box className = 'da-curve'>
            <img src={repair} style={{width: 50, height: 50, borderRadius: 50/ 2, marginLeft:'40px'}} />
            <label style={{fontSize : 20, marginLeft: 20, flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"50px"}}>จัดการบัญชีพนักงาน</label>
        </Box>

        <h3 className='emAll'>
            พนักงานทั้งหมด
        </h3>
        <h3>
          {employees.map((employee) => (
            <EmployeeComp key = {employee.id} {...employee} />
          ))}
          <AddEmployeeButton />
          <span className='spacing-between' style={{display : 'flex', flexDirection : 'row', marginLeft: '60px', marginTop: '-49px'}}>
            <button style={{width : 180, marginRight : 40, height : 40, outline:'none', fontWeight: 'bold'}} onClick={handleBack} type='button' className = "btn" >
                <ArrowLeft style={{width : 50, marginBottom: 5}}/>
                <label style={{fontSize: 20, marginRight : 20, marginTop : -2, cursor: 'pointer'}} onClick={handleBack}>ย้อนกลับ</label>
            </button>
        </span>
        </h3>
        

        

            
        
    </div>
  )
}

export default EmployeePage
