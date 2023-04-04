import React, { useState } from "react";
import { async } from "@firebase/util";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { Regis } from "../firebase/components/authen";
import { takeUser } from "../firebase/components/firestore";

const Register = () => {
  const [goToWebpage, setGoToWebpage] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(false);

  const [getUser, setGetUser] = useState({
    Email: "",
    Password: "",
    confirmPassword:"",
    Name: "",
    LastName: "",
    PhoneNumber: "",
    CarModel: "",
    CarNumber: "",
  });

  const [errorUser, setErrorUser] = useState({
    Email: "",
    Password: "",
    confirmPassword:"",
    Name: "",
    LastName: "",
    PhoneNumber: "",
    CarModel: "",
    CarNumber: "",
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGetUser((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
    validateInput(event);
  };

  const validateInput = (event) => {
    const { name, value } = event.target;
    setErrorUser((prevProps) => {
      let stateObj = { ...prevProps, [name]: "" };
      switch (name) {
        case "password":
          if (!value) {
            stateObj[name] = <span className="text-red-600">Please enter Password.</span>;
          } else if (getUser.confirmPassword && value !== getUser.confirmPassword) {
            stateObj["confirmPassword"] = <span className="text-red-600">Password and Confirm Password does not match.</span>;
            setPasswordsMatch(false);
          } else {
            stateObj["confirmPassword"] = getUser.confirmPassword ? "" : errorUser.confirmPassword;
            setPasswordsMatch(true);
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = <span className="text-red-600">Please enter Confirm Password.</span>;
          } else if (getUser.Password && value !== getUser.Password) {
            stateObj[name] = <span className="text-red-600">Password and Confirm Password does not match.</span>;
            setPasswordsMatch(false);
          } else {
            setPasswordsMatch(true);
          }
          break;

          default:
          break;
        }
        return stateObj;
      });
    }

  if (goToWebpage) {
    return <Navigate to="/Mainpage" />;
  }

  const clickHanderSubmit = async (event) => {
    event.preventDefault();
    const result = await Regis(getUser);
  };

  return (
    <div className="text-black bg-cover h-screen flex items-center justify-center">
      <div className = "bgGraphics"></div>
      <div className = "bgGraphics bg2"></div>
      <div className = "bgGraphics bg3"></div>
      <div className = "boxjang p-6 flex flex-col justify-center rounded-xl shadow-md">
        <div>
          <div className="flex justify-center text-[36px]">
            <label> สมัครสมาชิก </label>
          </div>
          <hr className = "mt-3 mb-3" />
          <form className = "flex flex-col gap-1">
            <div className = "flex flex-row gap-2">
              <div className = "flex flex-col">
                <label> Name: </label>
                <input
                  type = "text"
                  name = "Name"
                  value = {getUser.Name}
                  onChange = {handleInputChange}
                  className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                  placeholder = "Name"
                />
              </div>
              <div className = "flex flex-col">
                <label> Lastname: </label>
                <input
                  type = "text"
                  name = "LastName"
                  value = {getUser.LastName}
                  onChange = {handleInputChange}
                  className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                  placeholder = "Lastname"
                />
              </div>
            </div>
            <div className = "flex flex-col">
              <label> Phone number: </label>
              <input
                type = "text"
                name = "PhoneNumber"
                value = {getUser.PhoneNumber}
                onChange = {handleInputChange}
                className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                placeholder = "xxx-xxx-xxxx"
              />
            </div>
            <div className = "flex flex-col">
              <label> Email: </label>
              <input
                type = "text"
                name = "Email"
                value = {getUser.Email}
                onChange = {handleInputChange}
                className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                placeholder = "Email"
              />
            </div>
            <div className = "flex flex-col">
              <label> Password: </label>
              <input
                type = "text"
                name = "Password"
                value = {getUser.Password}
                onChange = {handleInputChange}
                className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                placeholder = "Enter Password"
                onBlur={validateInput}
              /> {errorUser.Password && <span className='err'>{errorUser.Password}</span>}
            </div>
            <div className = "flex flex-col">
              <label> Confirm Password: </label>
              <input
                type = "text"
                name = "confirmPassword"
                value = {getUser.confirmPassword}
                onChange = {handleInputChange}
                className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                placeholder = "Enter Confirm-Password"
                onBlur={validateInput}
              /> {errorUser.confirmPassword && <span className='err'>{errorUser.confirmPassword}</span>}
            </div>
            <div className = "flex flex-row justify-start gap-2">
              <div className = "flex flex-col">
                <label htmlFor = "CarModel">CarModel:</label>
                <input
                  type = "text"
                  id = "CarModel"
                  name = "CarModel"
                  value = {getUser.CarModel}
                  onChange = {handleInputChange}
                  className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                  placeholder = "Tesla Model3, Ora good cat"
                />
              </div>
              <div className = "flex flex-col">
                <label htmlFor = "CarNumber">Car registration number:</label>
                <input
                  type = "text"
                  id = "CarNumber"
                  name = "CarNumber"
                  value = {getUser.CarNumber}
                  onChange = {handleInputChange}
                  className = "border-[1px] border-black rounded p-2 placeholder:italic placeholder:border"
                  placeholder = "X-XX-XXXX"
                />
              </div>
            </div>

            <hr className = "mt-4 mb-4" />
            <div className = "flex flex-row justify-between w-full gap-8">
              <button
                onClick = {() => {
                  setGoToWebpage(true);
                }}
                className = "flex w-full items-center justify-center p-2 bg-rose-500 rounded hover:bg-red-400 active:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-400  text-amber-50"
              >
                ยกเลิก
              </button>
              <button
                type = "submit"
                onClick = {clickHanderSubmit}
                className = "flex w-full items-center justify-center p-2 bg-sky-500 rounded hover:bg-cyan-300 active:bg-sky-500 focus:outline-none focus:ring focus:ring-sky-300 text-amber-50"
                disabled={!passwordsMatch}
              >
                สมัครสมาชิก
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;