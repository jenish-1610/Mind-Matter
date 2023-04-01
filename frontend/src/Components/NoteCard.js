import React from "react";
import '../Style/NoteCard.css';

const NoteCard = (props) => {
  const journal = props.journal;
  return (
    <div className='flex-notecard'>
      <h4 className="heading-notecard">Note</h4>
      <p className="title-notecard">Title : {journal.title}</p>
      <p className="content-notecard">Content : {journal.content}</p>
      <p className="time-notecard">Time : {journal.time}</p>
    </div>
  );
};

export default NoteCard;
