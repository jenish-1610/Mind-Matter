import React from "react";
import '../Style/NoteCard.css';

const NoteCard = (props) => {
  const journal = props.journal;
  return (
    <div className='rounded overflow-hidden shadow-lg card'>
      <p>Title : {journal.title}</p>
      <p>Content : {journal.content}</p>
      <p>Time : {journal.time}</p>
    </div>
  );
};

export default NoteCard;
