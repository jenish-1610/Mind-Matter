import React from "react";
import docimg from "../assets/doctor.jpg";
import "../Style/docprofile.css";
import { FaGraduationCap } from "react-icons/fa";
import { FaSplotch } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaLanguage } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useNavigate } from "react-router-dom";



const Doc1 = () => {

  const navigate = useNavigate();

  const id = useParams();
  console.log(id);
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    let fun = async () => {
      const url =
        process.env.REACT_APP_BACKEND_URL + "therapist/therapist/" + id.id;
      await axios.get(url).then((res) => {
        setDoctor(res.data.doctor);
      });
    };
    fun();
  }, []);
  return (
    <div>
      <nav className='navigation'>
        <Navbar />
      </nav>

      {doctor && (
        <div className='py-16 bg-white'>
          <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
            <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
              <div className='my-flex'>
                <div className='md:5/12 lg:w-5/12'>
                  <img src={docimg} className='doc-image' />
                </div>
                <div className='my-button'>
                  <button
                    className='appointment-button'
                    onClick={() => {
                      let url = "../bookappointment/" + id;
                      navigate(url);
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
              <div className='md:7/12 lg:w-6/12'>
                <h2
                  className='doctor-heading'
                  class='text-2xl text-gray-900 font-bold md:text-4xl docname'
                >
                  {doctor.docName}
                </h2>
                <div className='doctor-sub'>
                  <div className='doctor-sub1'>
                    <h3>Email:</h3>
                    <p>{doctor.email}</p>
                  </div>
                  <div className='doctor-sub1'>
                    <h3>Education:</h3>
                    <p>{doctor.education}</p>
                  </div>
                  <div className='doctor-sub1'>
                    <h3>Qualifications:</h3>
                    <p>{doctor.qualifications}</p>
                  </div>
                  <div className='doctor-sub1'>
                    {" "}
                    <h3>Specifications:</h3>
                    <p>{doctor.specialization}</p>
                  </div>
                  <div className='doctor-sub1'>
                    <h3>Language Spoken:</h3>
                    <p>{doctor.languages}</p>
                  </div>
                </div>
                <p className='mt-4 text-gray-600'> {doctor.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Doc1;