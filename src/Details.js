import { useState,useEffect } from 'react';
import './Details.css'

const Details=()=>{

    return(
        <div>
            <h2 className="detail-car">ข้อมูลรถยนต์</h2>
            <div className="details-container">
                <div>
                    <div>
                        <h3>ยี่ห้อ : </h3>
                        <p style={{fontSize:15}}> Tesla Model 3</p>
                    </div>
                    <div>
                        <h3>เลขทะเบียน : </h3>
                        <p style={{fontSize:15}}> กท-3293</p>
                    </div>
                    <div>
                        <h3>เข้าอู่วันที่ : </h3>
                        <p style={{fontSize:15}}> 12/05/65</p>
                    </div>
                    <div>
                        <h3>อาการเบื้องต้น : </h3>
                        <p style={{fontSize:15}}> รถเสีย สตาร์ทไม่ติด</p>
                    </div>
                </div>
                <div className="detail-image">
                    <img width="305" height="183" src="https://www.headlightmag.com/hlmwp/wp-content/uploads/2022/12/Tesla-Model-3-Rear-Wheel-Drive-01.jpg" className='logo' alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Details