import React from 'react'

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
        const url =
          process.env.REACT_APP_BACKEND_URL + "journals/addjournal/";
        await axios.post(url, journal).then((res) => {
          navigate("../journal");
        });
    }

  return (
    <div className="flex">
      Title :
      <input
        type='text'
        name='title'
        value={journal.title}
        onChange={handler}
      ></input>
      Content :
      <input
        type='text'
        name='content'
        value={journal.content}
        onChange={handler}
      ></input>
      <button onClick={save} className="secondary-button">Create Journal</button>
        </div>
  )
}

export default createJournal
