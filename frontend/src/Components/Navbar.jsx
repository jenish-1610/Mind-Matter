import React from "react";
import "../Style/navbar.css";
import { BrowserRouter,Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className='main-nav flex'>
       <div className="logo">Mind Matter</div>
        
        <ul className='nav-links flex'>
          <li>
            <a href='#' className='nav-title'>
             Home

            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Consultancy
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Podcasts
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Meditation</a>
                </li>
                <li>
                  <a href='#'>Yoga</a>
                </li>
               
               
              </ul>
            </a>
          </li>
          <li>
            <a href='#' className='nav-title'>
              Articles
              <ul className='nav-sub'>
                <li>
                  <a href='#'>Mental</a>
                </li>
                <li>
                  <a href='#'>happiness</a>
                </li>
                <li>
                  <a href='#'>depression</a>
                </li>
                <li>
                  <a href='#'>anxiety</a>
                </li>
              </ul>
            </a>
          </li>
          <li>
            <a href="../journal" className='nav-title'>
              Journaling
             
            </a>    
          </li>
        </ul>
        <div className="Button">
                <a href="../Login"><button className="button">Login</button></a>
                <a href="../Signup"><button className="button">Sign up</button></a>
              </div>
      </nav>
    </>
  );
};

export default Navbar;