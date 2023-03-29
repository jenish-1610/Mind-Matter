import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up from "./Pages/Sign_up";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Otp from "./Pages/otp";
import Journal from "./Pages/journal";
import Home from "./Pages/Home";
import Note from "./Pages/Note";
import Doc1 from "./Pages/docprofile";
import Consultancy from "./Pages/Consultancy";
import TherpistRegister from "./Pages/TherapistRegister";
import Article from "./Pages/Article";
import CreateJournal from "./Pages/createJournal";
import Homeconsultancy from "./Pages/homeconsultancy";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div>

 
      <BrowserRouter>
     
        <Routes>
          {/* <Route index element={<>hello</>} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/' element={<></>} /> */}
          <Route path='/signup' element={<Sign_up />} />
          <Route path='/journal' element={<Journal />} />
          <Route path='/journal/:id' element={<Note />} />
          <Route path='/otp/:email' element={<Otp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/consultancy' element={<Consultancy />} />
          <Route path='/docProfile/:id' element={<Doc1 />} />
          <Route path='/therapist_Signup' element={<TherpistRegister />} />
          <Route path='/article' element = {<Article/>} />
          <Route path='/createjournal' element={<CreateJournal />} />
          <Route path='/homeconsultancy' element={<Homeconsultancy/>} />
          
          <Route path='*' element={<Error />} />
        </Routes>
        </BrowserRouter>
     
     
     

    
    </div>
  );
}

export default App;
