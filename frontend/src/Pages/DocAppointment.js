import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Style/docAppointment.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DocAppointment = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [appointment, setAppointment] = useState({
    user: window.localStorage.getItem('loginToken'),
    doctor: id,
    name: "",
    problem: "",
    date: "",
    gender: "",
    city: "",
    area: "",
  });

  function handler(e) { 
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  }

  const appointmentHandler = async() => { 
      const url =
      process.env.REACT_APP_BACKEND_URL + "appointment/addappointment";
      await axios.post(url, appointment).then((res) => { 
        console.log(res);
      })
      navigate('/');

  }

  return (
    <div>
      <nav className='navigation'>
        <Navbar />
      </nav>

      <div className="appointment-booking">
        <h2 className='appointment-heading'>Appointment Form</h2>

        <div class='flex items-center justify-center p-12 appointment-flex'>
          <div class='mx-auto w-full max-w-[550px] bg-white'>
            <form action='https://formbold.com/s/FORM_ID' method='POST'>
              <div div class='mb-5'>
                <label
                  for='name'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  onChange={handler}
                  value={appointment.name}
                  placeholder='Full Name'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
              <div class='mb-5'>
                <label
                  for='phone'
                  class='mb-3 block text-base font-medium text-[#07074D]'
                >
                  Suffering From
                </label>
                <input
                  type='text'
                  name='problem'
                  id='problem'
                  onChange={handler}
                  value={appointment.problem}
                  placeholder='Enter the problem you are suffering from'
                  class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
              </div>
              <div class='-mx-3 flex flex-wrap'>
                <div class='w-full px-3 sm:w-1/2'>
                  <div class='mb-5'>
                    <label
                      for='date'
                      class='mb-3 block text-base font-medium text-[#07074D]'
                    >
                      Date
                    </label>
                    <input
                      type='date'
                      name='date'
                      id='date'
                      onChange={handler}
                      value={appointment.date}
                      class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    />
                  </div>
                </div>
                <div class='w-full px-3 sm:w-1/2'>
                  <div class='mb-5'>
                    <label
                      for='time'
                      class='mb-3 block text-base font-medium text-[#07074D]'
                    >
                      Gender
                    </label>
                    <input
                      type='String'
                      name='gender'
                      id='time'
                      onChange={handler}
                      value={appointment.gender}
                      class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    />
                  </div>
                </div>
              </div>

              <div class='mb-5 pt-3'>
                <label class='mb-5 block text-base font-semibold text-[#07074D] sm:text-xl'>
                  Address Details
                </label>
                <div class='-mx-3 flex flex-wrap'>
                  <div class='w-full px-3 sm:w-1/2'>
                    <div class='mb-5'>
                      <input
                        type='text'
                        name='area'
                        id='area'
                        onChange={handler}
                        value={appointment.area}
                        placeholder='Enter area'
                        class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                      />
                    </div>
                  </div>
                  <div class='w-full px-3 sm:w-1/2'>
                    <div class='mb-5'>
                      <input
                        type='text'
                        name='city'
                        id='city'
                        onChange={handler}
                        value={appointment.city}
                        placeholder='Enter city'
                        class='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button class='appointment-button' onClick={appointmentHandler}>
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocAppointment;
