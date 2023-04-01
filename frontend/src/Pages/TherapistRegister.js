import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
// import Footer from "../Components/Footer";

// import User from '../../../backend/Model/User';

// import "../Style/Sign_up.css";
// import Navbar from "../Components/navbar";
import "../Style/therapistRegister.css";

const TherpistRegister = () => {
  const navigate = useNavigate();

  const [therapist, setTherapist] = useState({
    docName: "",
    email: "",
    education: "",
    qualifications: "",
    specialization: "",
    languages: "",
    about: "",
  });

  function handler(e) {
    const { name, value } = e.target;
    setTherapist({ ...therapist, [name]: value });
    // console.log(user);
  }

  async function submitHandler(e) {
    e.preventDefault();

    const {
      docName,
      email,
      education,
      qualifications,
      specialization,
      languages,
      about,
    } = therapist;

    if (
      !docName ||
      !email ||
      !education ||
      !qualifications ||
      !specialization ||
      !languages ||
      !about
    ) {
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
      const path = process.env.REACT_APP_BACKEND_URL + "therapist/addtherapist";
      const response = await axios.post(path, therapist);
      console.log(response);
      if (response.data.code == 200) {
        toast.success("sucessfully added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        navigate("/");
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
      <nav className="navigation">
        <Navbar />
      </nav>
      <div className='outerbox'>
        <div className='innerbox'>
          <header className='therapist-singup-header'>
            <h1>Sign Up</h1>
          </header>

          <div className='therapist-signup-body'>
            <form action='#'>
              <p>
                <label htmlFor='therpist'>Therapist Name</label>
                <input
                  type='text'
                  id='therapist'
                  name='docName'
                  onChange={handler}
                  value={therapist.docName}
                />
              </p>
              <p>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={handler}
                  value={therapist.email}
                />
              </p>
              <p>
                <label htmlFor='education'>Education</label>
                <input
                  type='text'
                  id='education'
                  placeholder='education'
                  name='education'
                  onChange={handler}
                  value={therapist.education}
                />
              </p>
              <p>
                <label htmlFor='qualifications'>Qualification</label>
                <input
                  type='text'
                  id='qualifications'
                  name='qualifications'
                  onChange={handler}
                  value={therapist.qualifications}
                />
              </p>
              <p>
                <label htmlFor='specialization'>Specialization</label>
                <input
                  type='text'
                  id='specialization'
                  name='specialization'
                  onChange={handler}
                  value={therapist.specialization}
                />
              </p>
              <p>
                <label htmlFor='languages'>Languages</label>
                <input
                  type='text'
                  id='languages'
                  name='languages'
                  onChange={handler}
                  value={therapist.languages}
                />
              </p>
              <p>
                <label htmlFor='about'>About Yourself</label>
                <input
                  type='text'
                  id='about'
                  name='about'
                  onChange={handler}
                  value={therapist.about}
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
          </div>
        </div>
      </div>
      {/* <footer >
        <Footer />
      </footer> */}
    </>
  );
};

export default TherpistRegister;
