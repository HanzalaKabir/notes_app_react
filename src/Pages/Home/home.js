import "./home.css";
import { useRef } from "react";
import { Header } from "../../components";
import { Sidebar } from "../../components";
import { InputCard } from "../../components";
import { Footer } from "../../components";
import { NoteCard } from "../../components";
import { useNotes } from "../../Context";
import { useFetchNotes } from "../../services/getNotes";
import { useAccessToken } from "../../Context";
import { useEffect } from "react";
import { LoginModal } from "../../components";
import { deleteNote } from "../../services/updateNotes";

export const Home = () => {
  const { notes } = useNotes();
  const { accessToken } = useAccessToken();
  const fetchNotes = useFetchNotes();
  //const { showModal, setShowModal } = useAccessToken();

  // const handleLoginClick = () => {
  //   const val = showModal;
  //   setShowModal(!val);
  // };

  const accessTokenRef = useRef(accessToken);

  useEffect(() => {
    if (accessTokenRef.current !== accessToken) {
      fetchNotes();
      accessTokenRef.current = accessToken;
    }
  }, [accessToken, fetchNotes]);

  const handleDelete = async (note) => {
    await deleteNote({
      noteId: note._id,
      accessToken,
      documentId: note.documentId,
    });
    fetchNotes();
  };

  const notPinned_Archived = notes.filter((note) => {
    return !note.isPinned && !note.isArchived;
  });

  const notPinned = notes.filter((note) => {
    return note.isPinned && !note.isArchived;
  });

  return (
    <div>
      {!accessToken ? (
        <div className="">
          <div>
            <Header />
          </div>
          <LoginModal />
        </div>
      ) : (
        <>
          <Header />
          <div className="d-flex">
            <Sidebar />
            <InputCard />
          </div>
          <div className="notesContainer">
            <div className="h3 pinnedNotesHeading">Pinned Notes</div>
            <div className="pinnedNotesContainer NoteCard">
              {notPinned.length > 0 ? (
                notPinned.map((note) => (
                  <div key={note._id} style={{ position: "relative" }}>
                    <NoteCard
                      title={note.title}
                      note={note.note}
                      _id={note._id}
                      isPinned={note.isPinned}
                      isArchived={note.isArchived}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        zIndex: 2,
                      }}
                      onClick={() => handleDelete(note)}
                      aria-label="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <div className="h3 otherNotesHeading">Other Notes</div>
            <div className="NoteCard otherNotesContainer">
              {notPinned_Archived.length > 0 ? (
                notPinned_Archived.map((note) => (
                  <div key={note._id} style={{ position: "relative" }}>
                    <NoteCard
                      title={note.title}
                      note={note.note}
                      _id={note._id}
                      isPinned={note.isPinned}
                      isArchived={note.isArchived}
                    />
                    <button
                      style={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        zIndex: 2,
                      }}
                      onClick={() => handleDelete(note)}
                      aria-label="Delete"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};
