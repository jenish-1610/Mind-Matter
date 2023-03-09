import React from 'react';
import docimg from "./doctor.jpg";
import "./doc1style.css";
import { FaGraduationCap} from 'react-icons/fa';
import {FaSplotch} from 'react-icons/fa';

import { FaLanguage} from 'react-icons/fa';
const Doc1 = () => {
  return (
    <div>
      <div className='container'>
      
        <section class="work_skills card">
        

           
            <div class="skills">
            <div class="profile">
                <img src={docimg}/>
            </div>
                <h1 class="heading">Tanmay Bhatt</h1>
                <p className='para'>MA in Counselling Psychology</p>
                <div className="book">
                <button className='button'>Book Appointment</button>
                </div>
               </div>
        </section>
       
        <section class="timeline_about card">
          
          <div className='about'> 
            <div className='upper'>
            <h1><span className='icon'><FaGraduationCap size="30px"/></span>Qualifications</h1>
            <p>MA In Counselling Psychology</p>
           </div >
           <div className='upper'>
            <h1><span className='icon'><FaSplotch size="30px"/></span> Specialization</h1>
            <p>Relationship Issues, Couple Counseling, Grief & Loss, Trauma, Autism Spectrum Disorders, Body Image, Self Confidence, Anger, Child Counseling, Stress, Career Counselling</p>
           </div>
           <div className='upper'>
           <h1> <span className='icon'><FaLanguage size="30px"/></span> Languages Spoken</h1>
            <p>Hindi ,English</p>
           </div>
           <div className='upper'>
            <h1>About</h1>
            <p>Harsha, a mental health advocate and a certified counselling psychologist who has been practicing for more than 5 years. She has an experience of working in a variety of settings and with a diverse array of population. She is a person who is on a mission to make mental health available, accessible and affordable.</p>
           </div >
           </div>
        </section>
       
      </div>
    </div>
  )
}

export default Doc1
