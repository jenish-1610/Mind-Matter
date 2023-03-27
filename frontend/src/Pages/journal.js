import React, { useEffect } from "react";
import Logo from "../assets/2840443-removebg-preview.png";
import { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";

import "../Style/journal.css";
import axios from "axios";
import NoteCard from "../Components/NoteCard";
const Journal = () => {
  const [isLoading, setLoad] = useState(true);
  const [journals, setJournals] = useState([]);
  const [journal, setJournal] = useState({
    title: "",
    content: "",
    email: window.localStorage.getItem("loginToken"),
  });
  const navigate = useNavigate();
  const [showText, showTextArea] = useState(true);
  const journal_Path = "/journal/";

  useEffect(() => {
    const fetchData = async () => {
      const email = window.localStorage.getItem("loginToken");
      const url =
        process.env.REACT_APP_BACKEND_URL + "journals/getalljournal/" + email;
      await axios.get(url).then((res) => {
        console.log(res.data);
        setJournals(res.data.journalss);
        // console.log(journals);
        setLoad(false);
      });
    };
    fetchData();
  }, []);

  function handler(e) {
    if (!window.localStorage.getItem("loginToken")) {
      navigate("../login");
    }
    const path =
      process.env.REACT_APP_BACKEND_URL +
      "journals/getalljournal/" +
      journal.email;
    axios.get(path);
    showTextArea(!showText);
  }

  async function save() {
    const path = process.env.REACT_APP_BACKEND_URL + "journals/addjournal/";
    await axios.post(path, journal).then((res) => {
      navigate("../home");
    });
  }

  function handler2(e) {
    const { name, value } = e.target;
    setJournal({ ...journal, [name]: value });
    console.log(journal);
    //   console.log(user);
  }

  return (
    <div>
      {isLoading ? (
        <>Loading...</>
      ) : (
        <div>
          {journals.length ? (
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-8 '>
              {journals.map((journal, id) => (
                <Link to={journal_Path + journal._id} key={id}>
                  <div className='max-w-sm rounded overflow-hidden shadow-lg'>
                    <NoteCard journal={journal}></NoteCard>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div>
              <div className='logo'>
                <img src={Logo} alt='journal' hidden={!showText} />
              </div>
              <div className='flex-journal'>
                <div className='title-container'>
                  <input
                    name='title'
                    placeholder='title'
                    type='text'
                    hidden={showText}
                    onChange={handler2}
                    value={journal.title}
                    className='title'
                  />
                </div>
                <div>
                  <textarea
                    className='textarea'
                    name='content'
                    cols='120'
                    rows='20'
                    wrap='hard'
                    value={journal.content}
                    placeholder='Pen your thoughts here...'
                    onChange={handler2}
                    hidden={showText}
                  ></textarea>
                </div>
                <button
                  className='save-button'
                  type='submit'
                  onClick={save}
                  value='Add Journal'
                  hidden={showText}
                >
                  Save
                </button>
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
                  Your journal is place to express every detail of your
                  life-from events,ideas,feelings,to your daily thoughts and
                  memories
                </p>
              </div>
            </div>
          )}
          {/* <Link to={path + }>Create Note</Link> */}
          <div className='container' hidden={!showText}></div>
        </div>
      )}
    </div>
  );
};

export default Journal;
