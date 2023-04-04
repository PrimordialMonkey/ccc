import { useState,useEffect } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck,faXmark} from '@fortawesome/free-solid-svg-icons'
import './Order.css'

const Order=()=>{

    return(
        <div>
            <h2 className="detail-car">ผลการตรวจเช็ค</h2>
            <textarea placeholder="ระบุรายละเอียด" className="order-container"></textarea>
            <div className="order-control">
                <button className="order-cancel"><FontAwesomeIcon icon={faXmark} /> ยกเลิก</button>
                <div class="space"></div>
                <button className="order-confirm"><FontAwesomeIcon icon={faCheck} /> ยืนยัน</button>
            </div>
        </div>
    )
}

export default Order