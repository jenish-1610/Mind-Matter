import React from 'react';
import { FaRegWindowClose } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import img from '../../../assets/person-dummy.jpg'
import "./style.css";

 
const DoctorItem = ({ doctor: { _id,img, specialization, languages, about } }) => {
   const navigate = useNavigate();
   console.log(_id);
 const[infos,showInfo]=useState(false);
 const handler=()=>
 {
   showInfo(!infos);
 }
 
   return (
    <article className="doctors">
      <div className="img-container">
        <img  src={img}  alt=""/>
        <span className='close-btn'>
           <FaRegWindowClose/>
        </span>
     </div>
     <div className="doctor-info">
        <h3>specialization:{specialization}</h3>
        <h4>Speaks:{languages}</h4>
        <h5>Info<span onClick={handler}><FaCaretDown/></span></h5>
        <h5 hidden={!infos}>{about}</h5>
       
     </div>
     <div className="Buttons">
        <button className="book">Book Appointment</button>
            <button className="book" onClick={() => {
               let url = "../docProfile/" + _id;
               navigate(url);
        }}>View Profile</button>
         </div>
     </article>
  )
}

export default  DoctorItem
