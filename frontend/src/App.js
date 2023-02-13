import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sign_up from "./Pages/Sign_up";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Otp from "./Pages/otp";
import Journal from "./Pages/journal";
import Home from "./Pages/Home";
import Note from "./Pages/Note";

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
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
