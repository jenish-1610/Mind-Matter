import React from 'react';
import docimg from "../assets/doctor.jpg";
import "../Style/docprofile.css";
import { FaGraduationCap} from 'react-icons/fa';
import { FaSplotch } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import axios  from 'axios';
import { FaLanguage} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar';
const Doc1 = () => {
  const id = useParams();
  console.log(id);
  const [doctor, setDoctor] = useState();
  useEffect(() => {
    let fun = async () => {
      const url = process.env.REACT_APP_BACKEND_URL + "therapist/therapist/" + id.id;
      await axios.get(url).then((res) => {
        setDoctor(res.data.doctor);
      });
    };
    fun();
  }, []);
  return (
    
    <div>
      <nav className='navigation'>
        <Navbar/>
      </nav>



      {
        doctor &&
      <div className='container'>
      
        <section class="work_skills card">           
            <div class="skills">
            <div class="profile">
                <img src={docimg}/>
            </div>
                <h1 class="heading">{ doctor.docName}</h1>
                <p className='para'>{ doctor.docName}</p>
                <div className="book">
                <button className='button'>Book Appointment</button>
                </div>
                </div>
                </section>
       
                <section class="timeline_about card">
                
                <div className='about'> 
            <div className='upper'>
            <h1><span className='icon'><FaGraduationCap size="30px"/></span>Qualifications</h1>
            <p>{ doctor.docName}</p>
           </div >
           <div className='upper'>
            <h1><span className='icon'><FaSplotch size="30px"/></span> Specialization</h1>
            <p>{ doctor.docName}</p>
            </div>
            <div className='upper'>
           <h1> <span className='icon'><FaLanguage size="30px"/></span> Languages Spoken</h1>
            <p>{ doctor.docName}</p>
           </div>
           <div className='upper'>
            <h1>About</h1>
            <p>{ doctor.docName}</p>
            </div >
           </div>
           </section>
       
        </div>
        
      }
      <footer>
        <Footer />
      </footer>
    </div>

  )
}

export default Doc1
