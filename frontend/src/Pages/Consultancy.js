import React from 'react'
import { doctorData } from '../Components/config/doctorData';
import Navbar from "../Components/Navbar";
import Doctorlist from '../Components/Doctorlist';

const Consultancy = () => {
  return (
    <div>
    <Navbar/>
    
     <Doctorlist doctors={doctorData}/>
    </div>
  )
}

export default Consultancy
