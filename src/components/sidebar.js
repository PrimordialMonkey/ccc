import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div>
    <div className="sidebar">
      <nav className="main-menu">
        <ul>
          <li>
            <div className="Header">
              <div className="Profile">
                <img src="https://i.postimg.cc/4N9HLCG3/black-user-member-guest-icon-31634946589seopngzc1t.png"></img>
                <div className="Name">
                  <span className="nav-text">Guest</span>
                  <span className="email">example@example.com</span>
                </div>
              </div>
            </div>
            <a href="#">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li>
          <a href="#">
              <i className="fa fa-light fa-list"></i>
              <span className="nav-text">Payments Status</span>
            </a>
          </li>
          <li>
          <a href="#">
              <i className="fa fa-regular fa-user"></i>
              <span className="nav-text">Profile</span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
            <a href="#">
              <i className="fa fa-regular fa-gear"></i>
              <span className="nav-text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Logout</span>
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
      <Outlet/>
    </div>
  );
}
export default Sidebar;