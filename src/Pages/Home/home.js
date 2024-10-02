import "./home.css";
import { Header } from "../../components";
import { Sidebar } from "../../components";
import { InputCard } from "../../components";
import { Footer } from "../../components";
import { NoteCard } from "../../components";
import { useNotes } from "../../Context";
import { useFetchNotes } from "../../getNotes";
import { useAccessToken } from "../../Context";
import { useEffect } from "react";
import { LoginModal } from "../../components";

export const Home = () => {
  const { notes } = useNotes();
  const { accessToken } = useAccessToken();
  const fetchNotes = useFetchNotes();
  //const { showModal, setShowModal } = useAccessToken();

  // const handleLoginClick = () => {
  //   const val = showModal;
  //   setShowModal(!val);
  // };

  useEffect(() => {
    fetchNotes();
  }, [accessToken]);

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
          <LoginModal/>
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
                <></>
              )}
            </div>
            <div className="h3 otherNotesHeading">Other Notes</div>
            <div className="NoteCard otherNotesContainer">
              {notPinned_Archived.length > 0 ? (
                notPinned_Archived.map((note) => (
                  <NoteCard
                    title={note.title}
                    note={note.note}
                    key={note.id}
                    _id={note._id}
                    isPinned={note.isPinned}
                    isArchived={note.isArchived}
                  />
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
