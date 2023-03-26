import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "640c7c8ccc91861b1a4ba62b1",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-11T13:05:16.161Z",
      __v: 0,
    },
    {
      _id: "640c7cd66e92e81f3f18b48a2",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-11T13:06:30.259Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557313",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557314",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557315",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557316",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557317",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
    {
      _id: "641056ae80918edb538557318",
      user: "6408ee9197fe76f8b765f925",
      title: "My Title",
      description: "wake up early",
      tag: "personal",
      date: "2023-03-14T11:12:46.812Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  //Add Note
  const addNote = (title, description, tag) => {
    //todo api cal
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
  const deleteNote = (id) => {
    //Todo api call
    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = (id, title, description, tag) => {
    // to do api call
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
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
