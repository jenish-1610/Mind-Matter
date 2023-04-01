import React, { useEffect, useState } from "react";
// import { doctorData } from "../Components/config/doctorData";
import Navbar from "../Components/Navbar";
import Doctorlist from "./viewalldocs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Consultancy = () => {
  const navigate = useNavigate();
  const [docs, setDocs] = useState();
  useEffect(() => {
    if (!window.localStorage.getItem("loginToken")) {
      navigate("../login");
    }
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
