import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { SingIn } from "../firebase/components/authen";
import { getUser } from "../firebase/components/firestore";
import { useContext, useEffect } from "react";   //   ___ 6 และ 7 import เพื่อที่จะเรียกใช้ useContext และ useEffect
import { AuthContext } from "../auth/auth";
import { auth } from "../firebase/firebase"; 

const Login = () => {
    const test2 = useContext(AuthContext) // สร้างตัวแปรเพื่อใช้ตัวแปรจากบรรทัด7
    const [fost, setFost] = useState(0)
    const [goToWebpage, setGoToWebpage] = React.useState(false);
    const [goToRegis, setGoToRegis] = React.useState(false);
    const [goToUser, setGoToUser] = React.useState({Email:"", Password:""})
    const [user, setUser] = useState();
    let navigate = useNavigate();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(event.target)
        setGoToUser((prevProps) => ({
          ...prevProps,
          [name]: value
        }));
      };

                       

    if(goToWebpage){
        return <Navigate to="/Mainpage"/>
    }
    if(goToRegis){
        return <Navigate to="/Register"/>
    }

    const handerSingIn = async(e) => {
        try{
            e.preventDefault();
            const result = await SingIn(goToUser.Email, goToUser.Password)
            setUser(result.data);
            localStorage.setItem("uid", result.data);
            console.log(auth);
            navigate('/profile/editcar');
        } catch (error) {

        }
    }

    return (
        <div>
            <div className="flex justify-end p-1">
                <div className="bg-red-600 w-[50px] h-[50px] rounded-full gap-2 flex justify-center items-center">
                    <button onClick={() => {setGoToWebpage(true)}}
                        className="w-full h-full rounded-full focus:outline-none focus:ring focus:ring-rose-700 text-white">
                        X
                    </button>
                </div>
            </div>
            <div className="text-black bg-cover h-screen flex items-center justify-center">
                <div className="bgGraphics"></div>
                <div className="bgGraphics bg2"></div>
                <div className="bgGraphics bg3"></div>
                <div className="boxjang p-6 flex flex-col justify-center w-[400px] rounded-xl shadow-md">
                    <div>
                        <div className="flex justify-center text-[36px]">
                            <label> เข้าสู่ระบบ </label>
                        </div>
                        <hr className="mt-3 mb-3"/>
                        <form className="flex flex-col gap-2">
                            <div className="flex flex-col">
                                <label> Email: </label>
                                <input name="Email" value={goToUser.Email} onChange={handleInputChange}
                                    className="border-[1px] border-black rounded p-2 placeholder:italic placeholder:border" placeholder="Email"/>
                            </div>
                            <div className="flex flex-col">
                                <label> Password: </label>
                                <input name="Password" value={goToUser.Password} onChange={handleInputChange}
                                    className="border-[1px] border-black rounded p-2 placeholder:italic placeholder:border" placeholder="Password"/>
                            </div>
                        </form>
                        <div className="flex flex-row justify-between">
                            <div></div>
                            <Link to="/Repass" className="text-red-600"> ลืมรหัสผ่าน </Link>
                        </div>
                        <br/>
                        <button onClick={handerSingIn}
                            className="flex w-full items-center justify-center p-2 bg-sky-500 rounded hover:bg-cyan-300 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 text-amber-50">
                            เข้าสู่ระบบ
                        </button>
                        <hr className="mt-4 mb-4"/>
                        <button onClick={() => {setGoToRegis(true)}}
                            className="flex w-full items-center justify-center p-2 bg-yellow-500 rounded hover:bg-[#FFDA77] active:bg-yellow-500 focus:outline-none focus:ring focus:ring-yellow-400  text-amber-50">
                            สมัครสมาชิก
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Login;