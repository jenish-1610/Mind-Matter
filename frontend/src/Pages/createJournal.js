import React from 'react'
import { useState } from 'react';
import '../Style/createjournal.css'

const createJournal = () => {

    const [journal, setJournal] = useState({
      title: "",
      _id: "",
      content: "",
      time: "",
    });

    function handler(e) {
      const { name, value } = e.target;
      setJournal({ ...journal, [name]: value });
      //   console.log(user);
    }

    const save = async () => { 
        const url = process.env.REACT_APP_BACKEND_URL + "journals/addjournal/";
        await axios.post(url, journal).then((res) => {
          navigate("../journal");
        });
    }

  return (
    <div className='createjournal-flex'>
      
      <div className='createjournal-title'>
        {/* <label htmlFor="">Title</label> */}
        <input
          type='text'
          name='createjournal-title'
          placeholder='Title'
          value={journal.title}
          onChange={handler}
        ></input>
      </div>
      <div className='createjournal-content'>
        {/* <label htmlFor="">Content</label> */}
        <input
          type='text'
          name='createjournal-content'
          placeholder='Content'
          value={journal.content}
          onChange={handler}
        ></input>
      </div>
      <button onClick={save} className='secondary-button'>
        Create Journal
      </button>
    </div>
  );
}

export default createJournal
