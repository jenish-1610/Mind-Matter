import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../Style/Note.css";

const Note = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [journal, setJournal] = useState({
    title: "",
    _id: "",
    content: "",
    time: "",
  });

  //   let journal = { title: "", _id: "", content: "", time: "" };

  useEffect(() => {
    const fetchData = async () => {
      const url =
        process.env.REACT_APP_BACKEND_URL + "journals/getJournal/" + id;
      await axios.get(url).then((res) => {
        console.log(res.data);
        setJournal(res.data.journal);
        console.log(journal);
      });
    };
    fetchData();
  }, []);

  function handler(e) {
    const { name, value } = e.target;
    setJournal({ ...journal, [name]: value });
    //   console.log(user);
  }

  const update = async () => {
    const url =
      process.env.REACT_APP_BACKEND_URL + "journals/updatejournal/" + id;
    await axios.put(url, journal).then((res) => {
      navigate("../journal");
    });
  };

  const Delete = async () => {
    // console.log("Bulaya gaya hai");
    const url =
      process.env.REACT_APP_BACKEND_URL + "journals/deletejournal/" + id;
    await axios.delete(url).then((res) => {
      console.log(res);
      navigate("../journal");
    });
  };

  return (
    <div className='flex-note'>
      <div>
        <input
          className='title-container-note'
          type='text'
          name='title'
          value={journal.title}
          onChange={handler}
        ></input>
      </div>
      <div>
        <input
          className='textarea-note'
          type='text'
          name='content'
          value={journal.content}
          onChange={handler}
        ></input>
      </div>
      <div className='flex-button'>
        <button onClick={update} className='secondary-button'>
          Update
        </button>
        <button onClick={Delete} className='secondary-button'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
