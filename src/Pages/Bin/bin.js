// filepath: d:\Web D VS Code\notes_app_project\notes_app_react\src\Pages\Bin\bin.js
import "./bin.css";
import { Header } from "../../components";
import { Sidebar } from "../../components";
import { Footer } from "../../components";
import { NoteCard } from "../../components";
import { useNotes } from "../../Context";
import { useAccessToken } from "../../Context";
import { useFetchNotes } from "../../services/getNotes";
import { useEffect, useRef } from "react";

export const Bin = () => {
  const { notes } = useNotes();
  const { accessToken } = useAccessToken();
  const fetchNotes = useFetchNotes();
  const accessTokenRef = useRef(accessToken);

  useEffect(() => {
    if (accessTokenRef.current !== accessToken) {
      fetchNotes();
      accessTokenRef.current = accessToken;
    }
  }, [accessToken, fetchNotes]);

  // Assuming deleted notes have isDeleted: true
  const deletedNotes = notes.filter((note) => note.isDeleted);

  return (
    <div>
      {!accessToken ? (
        <div>
          <Header />
          {/* Optionally add a login modal here */}
        </div>
      ) : (
        <>
          <Header />
          <div className="d-flex">
            <Sidebar />
            <div className="notesContainer">
              <div className="h3 binNotesHeading">Bin</div>
              <div className="NoteCard binNotesContainer">
                {deletedNotes.length > 0 ? (
                  deletedNotes.map((note) => (
                    <NoteCard
                      title={note.title}
                      note={note.note}
                      key={note._id}
                      _id={note._id}
                      isPinned={note.isPinned}
                      isArchived={note.isArchived}
                    />
                  ))
                ) : (
                  <div>No notes in bin.</div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};
