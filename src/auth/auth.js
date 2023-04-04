import { useState, useEffect, createContext } from "react";
import { getUser } from "../firebase/components/firestore"; 

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [logIn,setLogIn] = useState(false);
    const [loading,setLoading] = useState(true);
    const [checkLogout,setcheckLogout] = useState(false)
    const [userData, setUserData] = useState({Email:"", Name:"", LastName:"", PhoneNumber:"", CarModel:""})
    const checkAuthentication = async ()=>{
        const token = localStorage.getItem("uid")
        try{
            const result = await getUser(token)
            if(result){
                setUserData(result)
                setLogIn(true)
                setLoading(false)
            } else {
                setLogIn(false)
                setLoading(false)
            }
        } catch (error) {
            setLogIn(false)
            setLoading(false)
        }
    }
    useEffect(() => {
        checkAuthentication()
    },[])

    if(loading){
        return(
            // <h1> Loading!! </h1>
            <div>
                <div className="text-black bg-cover h-screen flex items-center justify-center">
                    <div className="bgGraphics"></div>
                    <div className="bgGraphics bg2"></div>
                    <div className="bgGraphics bg3"></div>
                    <div className="boxjang p-6 flex flex-col justify-center items-center w-[400px] text-[28px] rounded-xl shadow-md">
                        <label> Loading!! </label>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{userData:userData, logIn:logIn}}> 
            {
                children
            }
        </AuthContext.Provider>
    )
}