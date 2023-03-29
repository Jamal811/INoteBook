import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //Get All Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGVlOTE5N2ZlNzZmOGI3NjVmOTI1In0sImlhdCI6MTY3ODQ1MjY4OH0.IoadXqAplVTO6fCBxbPn6ZcWn73ZB0blGBM2VPSadAg",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add Note
  const addNote = async (title, description, tag) => {
    //todo api cal
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGVlOTE5N2ZlNzZmOGI3NjVmOTI1In0sImlhdCI6MTY3ODQ1MjY4OH0.IoadXqAplVTO6fCBxbPn6ZcWn73ZB0blGBM2VPSadAg",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);
    //
    console.log("adding a new note");
    const note = {
      _id: "641056ae80918edb538557318",
      user: "6408ee9197fe76f8b765f925",
      title: title,
      description: description,
      tag: tag,
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete Note
  const deleteNote = async (id) => {
    //Todo api call

    const response = await fetch(`${host}/api/notes//deletenote/${id}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGVlOTE5N2ZlNzZmOGI3NjVmOTI1In0sImlhdCI6MTY3ODQ1MjY4OH0.IoadXqAplVTO6fCBxbPn6ZcWn73ZB0blGBM2VPSadAg",
      },
    });
    const json = response.json();
    console.log(json);

    // delete by client side frontend
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    // to do api call
    const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwOGVlOTE5N2ZlNzZmOGI3NjVmOTI1In0sImlhdCI6MTY3ODQ1MjY4OH0.IoadXqAplVTO6fCBxbPn6ZcWn73ZB0blGBM2VPSadAg",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);
    console.log("editing the note with id" + id);
    //logic for edit in client side
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
