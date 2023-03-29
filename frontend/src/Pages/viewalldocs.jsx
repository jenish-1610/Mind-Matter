import React from 'react'
import DoctorItem from '../Components/Doctorlist/Doctoritem';
import "../Style/viewalldocs.css";
import Navbar from "../Components/Navbar"
const Doctorlist = ({doctors}) => {
  return (
    <>
      <nav className='navigation'>
        <Navbar />
      </nav>
    <div className='doctor-list-wrap'>
      {doctors.map(doctor=><DoctorItem doctor={doctor} key={doctor.id}/>)}
    </div>
      </>
  )
}

export default Doctorlist
