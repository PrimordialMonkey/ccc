import PropTypes from 'prop-types'
import {Router, Routes, Route, BrowserRouter} from 'react-router-dom';    
import './App.css';
import AddDynamic from './components/AddDynamic';
import AddCar from './components/AddCar';
import Header from './components/CarPage'
import TempSidebar from './components/TempSidebar';
import EditEmployee from './owner/EditEmployee';
import EditProfileO from './owner/EditProfileO';
import GarageRegister from './owner/GarageRegister';
import ViewProfile from './owner/ViewProfile';
import ViewEmployee from './owner/ViewEmployee';
import ViewProfileM from './manager/ViewProfileM';
import WorkHistory from './manager/WorkHistory';
import Sidebar from './components/sidebar';
import ViewProfileMechanics from './machanics/ViewProfileMechanics';
import { AuthProvider } from './auth/auth';
import FBTest from './firebase/FBTest';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import {auth} from './firebase/firebase';
import EditCar from './components/EditCar';
import Register from './components/Register';
import AddEmployee from './owner/AddEmployee';
import EmployeePage from './owner/EmployeePage';
import ViewProfileCashier from './cashier/ViewProfileCashier';


function App() {

  const [session, setSession] = useState({
    isLoggedIn : false,
    currentUser : null,
    errorMessage : null
  });

  useEffect(() => {
    const handleAuth = auth.onAuthStateChanged(user => {
      if (user)
      {
        setSession({
          isLoggedIn : true,
          currentUser : user,
          errorMessage : null
        });
      }
    });
    return () => {
      handleAuth();
    }
  }, []);
                
  

  return (
    
    <div>
      <AuthProvider>
        <Routes>
          <Route path = "/" element={<AddDynamic />} />

          {/*owner*/}
          <Route path='owner' element={<Sidebar  />}> {/*sidebarowner*/}
            <Route path = "garage-register" element = {<GarageRegister />}/>
            <Route path = "employee" element={<EmployeePage />}/>
            <Route path = "editownerprofile" element = {<EditProfileO />}/>
            <Route path = "editemployee/:id" element = {<EditEmployee />} />
            <Route path = "viewemployee/:id" element = {<ViewEmployee />} />
            <Route path = "viewprofile" element = {<ViewEmployee />} />
            <Route path = "add-employee" element = {<AddEmployee />}/>
          </Route>  

          {/*mechanics*/}
          <Route path='mechanics' element={<Sidebar />}> {/*sidebarmechanic*/}
            <Route path = "viewprofile" element = {<ViewProfileMechanics />} />
          </Route>  

          {/*customer*/}
          <Route path='customer' element={<Sidebar />}> {/*sidebarcustomer*/}
            <Route path = "profile" element={<Header />} />
            <Route path = "profile/addcar" element = {<AddCar />} />
            <Route path = 'profile/editcar/:id' element={<EditCar />}/>
          </Route>

          {/*cashier*/}
          <Route path='cashier' element={<Sidebar />}> {/*sidebarmechanic*/}
            <Route path = "viewprofile" element = {<ViewProfileCashier />} />
          </Route>  


          <Route path='login' element={<Login setSession={setSession}/>} />
          <Route path='register' element={<Register />} />
          
        </Routes>
      </AuthProvider>
  
    </div>
  );
}



export default App;
