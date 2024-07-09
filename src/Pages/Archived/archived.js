import "./archived.css";
import { Header } from "../../components/header/header";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Footer } from "../../components/footer/footer";
import { NoteCard } from "../../components/NoteCard/NoteCard";
import { useNotes } from "../../Context/notesContext";

export const Archived = () => {
  const { notes } = useNotes();

  const Archived = notes.filter((note) => {
    return note.isArchived;
  });

  return (
    <>
      <Header />
      <Sidebar />
      <div className="h3 pinnedNotesHeading">Archived Notes</div>
      <div className="NoteCard">
        {Archived.length > 0 ? (
          Archived.map((note) => (
            <NoteCard
              title={note.title}
              note={note.note}
              key={note.id}
              id={note.id}
              isPinned={note.isPinned}
              isArchived={note.isArchived}
            />
          ))
        ) : (
          <></>
        )}
      </div>
      <Footer />
    </>
  );
};
