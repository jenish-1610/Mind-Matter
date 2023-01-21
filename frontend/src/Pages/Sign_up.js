import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer"

// import User from '../../../backend/Model/User';

import "../Style/Sign_up.css";
// import Navbar from "../Components/navbar";

const Sign_up = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });

  function handler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const { username, email, password, cpassword } = user;

    if (!username || !email || !password || !cpassword) {
      toast.error("Please enter all required fields ", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      if (password !== cpassword) {
        toast.error("confirm password and password is not same", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const path = process.env.REACT_APP_BACKEND_URL + "users/signup";
        const response = await axios.post(path, user);
        // console.log(response)
        if (response.data.code == 200) {
          toast.success("Otp send Sucessfull", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(`/otp/${user.email}`);
        } else if (response.data.code == 100) {
          toast.error("email is already registered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Something Went Wrong Please try it later", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }
    }
  }

  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
      <nav>
        <Navbar />
      </nav>
      <div className='outerbox'>
        <div className='innerbox'>
          <header className='signup-header'>
            <h1>Sign Up</h1>
          </header>

          <div className='signup-body'>
            <form action='#'>
              <p>
                <label htmlFor='username'>UserName</label>
                <input
                  type='text'
                  id='username'
                  name='username'
                  onChange={handler}
                  value={user.username}
                />
              </p>
              <p>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={handler}
                  value={user.email}
                />
              </p>
              <p>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  id='password'
                  placeholder='Atleast 8 characters'
                  name='password'
                  onChange={handler}
                  value={user.password}
                />
              </p>
              <p>
                <label htmlFor='cpassword'>Confirm Password</label>
                <input
                  type='password'
                  id='cpassword'
                  name='cpassword'
                  onChange={handler}
                  value={user.cpassword}
                />
              </p>
              <p>
                <input
                  type='submit'
                  value='Create Account'
                  id='submit'
                  onClick={submitHandler}
                />
              </p>
            </form>

            <div className='signup-footer'>
              <p>
                Already have an Account? <Link to='../login'>Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <footer >
        <Footer />
      </footer> */}
    </>
  );
};

export default Sign_up;
