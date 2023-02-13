import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "../Style/Login.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";


const Login = () => {
  const navigate = useNavigate();

  
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    //   console.log(user);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const { username, password } = user;

    if (!username || !password) {
      toast.error("Please enter all credentials", {
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
      const path = process.env.REACT_APP_BACKEND_URL + "users/login";
      const response = await axios.post(path, user);
      // console.log(response)

      if (response.data.code == 200) {
        toast.success("Login SucessFull", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // console.log(response.data.token);
        window.localStorage.setItem("loginToken", response.data.token.email);
        // console.log(window.localStorage.getItem("loginToken"));
        // let token = window.localStorage.getItem("loginToken");
        // console.log(token)

        navigate("../home");
      } else {
        toast.error("username or password is incorrect", {
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
      <div>
        <nav>
          <Navbar />
        </nav>
        <div className='outerbox'>
          <div className='innerbox'>
            <header className='login-header'>
              <h1>Login</h1>
            </header>
            <div className='loginbody'>
              <form action='#'>
                <p>
                  <label htmlFor='email'>Email / Username</label>
                  <input
                    type='text'
                    id='email'
                    placeholder='Enter your Email'
                    onChange={handler}
                    name='username'
                    value={user.username}
                  />
                </p>
                <p>
                  <label htmlFor='password'> Password</label>
                  <input
                    type='password'
                    id='password'
                    placeholder='Enter your Password'
                    onChange={handler}
                    name='password'
                    value={user.password}
                  />
                </p>

                <p>
                  <input
                    type='submit'
                    value='login'
                    id='submit'
                    onClick={submitHandler}
                  />
                </p>
              </form>
            </div>
            <div className='signup-footer'>
              <p>
                Don't have an account?<Link to='../signup'>Sign-up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <footer>
        <Footer />
      </footer> */}
    </>
  );
};

export default Login;
