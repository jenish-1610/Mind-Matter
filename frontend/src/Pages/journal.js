import React from "react";
import Logo from "../assets/2840443-removebg-preview.png";
import { useState } from "react";
import "../Style/journal.css";
const Journal = () => {
  const [showText, showTextArea] = useState(true);

  function handler(e) {
    showTextArea(!showText);
  }

  return (
    <div>
      <div className='logo'>
        <img src={Logo} alt='journal' hidden={!showText} />
        <textarea name='textarea' cols='100' rows='100' hidden={showText}>
          Pen your Thoughts here
        </textarea>
      </div>
      <div className='Button' hidden={!showText}>
        <button className='button' onClick={handler} hidden={!showText}>
          Start Writing
        </button>
      </div>

      <div className='par' hidden={!showText}>
        <p>You haven't added anything to your journal yet.</p>
      </div>
      <div className='par2' hidden={!showText}>
        <p>
          Your journal is place to express every detail of your life-from
          events,ideas,feelings,to your daily thoughts and memories
        </p>
      </div>

      <div className='container' hidden={!showText}></div>
    </div>
  );
};

export default Journal;
