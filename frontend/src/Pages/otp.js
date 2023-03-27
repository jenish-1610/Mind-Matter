import react, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  const { email } = useParams();
  console.log(email);

  const [otp, setOtp] = useState();

  function handler(e) {
    setOtp(e.target.value);
  }

  async function submitHandler(e) {
    e.preventDefault();
    const path = process.env.REACT_APP_BACKEND_URL + "users/cotp";
    const response = await axios.post(path, { email: email, otp: otp });
    if (response.data.code == 200) {
      navigate("/home");
    }
    else { 
      navigate("/signup");
    }
    // console.log("otp received");
  }

  return (
    <>
      <div className="flex-otp">
      <h2>Otp has Sucessfully sent</h2>

      <p className="enter-otp">
        <input className="enter-otp" type='number' name='otp' onChange={handler} value={otp} />
      </p>
      <p className="submit-otp">
        <input type='submit' value='Submit' onClick={submitHandler} />
      </p>

      </div>
    </>
  );
};

export default Otp;
