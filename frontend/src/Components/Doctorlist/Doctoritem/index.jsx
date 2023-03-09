import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.css";

 
const DoctorItem = ({doctor:{ id,img,expertise,Language,info}}) => {
   const navigate=useNavigate();
 const[infos,showInfo]=useState(true);
 const handler=()=>
 {
   showInfo(!infos);
 }
 
   return (
    <article className="doctors">
      <div className="img-container">
        <img src={ img}  alt=""/>
        <span className='close-btn'>
           <FaRegWindowClose/>
        </span>
     </div>
     <div className="doctor-info">
        <h3>Expertise:{expertise}</h3>
        <h4>Speaks:{Language}</h4>
        <h5>Info<span onClick={handler}><FaCaretDown/></span></h5>
        <h5 hidden={!infos}>{info}</h5>
       
     </div>
     <div className="Buttons">
        <button className="book">Book Appointment</button>
        <button className="book">View Profile</button>
     </div>
     </article>
  )
}

export default  DoctorItem
