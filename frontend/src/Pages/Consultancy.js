import React, { useEffect, useState } from "react";
// import { doctorData } from "../Components/config/doctorData";
import Navbar from "../Components/Navbar";
import Doctorlist from "./viewalldocs";
import axios from "axios";

const Consultancy = () => {
  const [docs, setDocs] = useState();
  useEffect(() => {
    let fun = async () => {
      const url = process.env.REACT_APP_BACKEND_URL + "therapist/alltherapist";
      await axios.get(url).then((res) => {
        setDocs(res.data.doctors);
      });
    };
    fun();
  }, []);

  return <div>{docs && <Doctorlist doctors={docs} />}</div>;


};

export default Consultancy;
