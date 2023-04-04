import React from 'react'
import {GiAutoRepair} from "react-icons/gi";
import '../components/comp.css';
import { Box } from '@mui/system';
import HistoryComponent from './HistoryComponent';
import Test from './Test';
import './HistoryComp.css';

const WorkHistory = () => {
  return (
    <div className='his-bg'>
        <Box style = {{paddingTop: 20, marginLeft : 60, backgroundColor: '#e2e5de', height: '100px', borderBottomLeftRadius: '80px'}}>
            <GiAutoRepair style={{width: 50, height: 50, marginLeft:'40px'}} />
            <label style={{fontSize : 20, marginLeft: 20, flex: 1, justifyContent: 'center', alignItems:"center", lineHeight:"50px"}}>ประวัติงานทั้งหมด</label>
        </Box>

        <h3 style={{marginLeft : 100, marginTop : 20, fontSize : 20}}>
            รายการ
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            <HistoryComponent/>
            

        </h3>

        

            
        
    </div>
  )
}

export default WorkHistory
