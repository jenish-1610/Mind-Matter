import React from 'react'
import DoctorItem from './Doctoritem';
import "./Style.css";
const Doctorlist = ({doctors}) => {
  return (
    <div className='doctor-list-wrap'>
      {doctors.map(doctor=><DoctorItem doctor={doctor} key={doctor.id}/>)}
    </div>
  )
}

export default Doctorlist
