import React from "react";
import "../Style/error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{
      overflow: "hidden",
      marginLeft: '220px'
    }}>
      <header className='top-banner flex-error container-error'>
        <a href=''>
          <span className='first'>Mind</span>
          <span className='second'>Matter</span>
        </a>
      </header>
      <div className='container-error main-error flex-error'>
        <img
          src={require("../assets/404.png")}
          alt='error image'
          className='image-404'
        />

        <div className='error-heading'>
          <h1>OOPS! PAGE NOT FOUND</h1>
        </div>

        <div className='error-description'>
          <p>
            Sorry, the page you're looking for doesn't exist. If you think
            something is broken, report a problem
          </p>
        </div>
        <div className='home-button'>
          <Link to='../'>Return home</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
