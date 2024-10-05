import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const { v4: uuid } = require("uuid");

const NotesContext = createContext();

const NotesProvider = (props) => {
  const [title, setTitle] = useState("");
  const [inputNote, setInputNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [documentId, setDocumentId] = useState("");

  return (
    <NotesContext.Provider
      value={{
        title,
        setTitle,
        inputNote,
        setInputNote,
        notes,
        setNotes,
        documentId,
        setDocumentId,
        uuid,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes };
