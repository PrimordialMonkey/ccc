import React from 'react'
import { Box } from 'react-bootstrap-icons';
import { ArrowLeft } from "react-bootstrap-icons";

const backButton = () => {
  return (
    <div>
      <span className='spacing-between' style={{display : 'flex', flexDirection : 'row', marginLeft: '-5px'}}>
            <button style={{width : 180, marginRight : 40, height : 40}} type='button' class = "btn btn-outline-dark">
                <ArrowLeft style={{width : 50, marginBottom: 5}}/>
                <label style={{fontSize: 20, marginRight : 20, marginTop : -2}}>ย้อนกลับ</label>
            </button>
        </span>
    </div>
  )
}

export default backButton
