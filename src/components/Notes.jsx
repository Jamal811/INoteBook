import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes } = context;
  return (
    <div className="container">
      <AddNote />
      <div className="Container my-3">
        <h2>Your Notes</h2>
        <div className="row my-3">
          {notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
