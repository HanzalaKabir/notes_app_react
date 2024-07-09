import "./NoteCard.css";
import { BsPinFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { RiUnpinLine } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import { MdOutlineUnarchive } from "react-icons/md";
import { useNotes } from "../../Context/notesContext";

export const NoteCard = (props) => {
  const variableObject = useNotes();
  let { notes, setNotes } = variableObject;

  const handlePinnedClick = (args) => {
    let tempNotes = notes.map((note) => {
      if (note.id === args.id) {
        let pinnedValue = note.isPinned;
        if (pinnedValue === true) {
          note = { ...note, isPinned: false };
        } else if (pinnedValue === false) {
          note = { ...note, isPinned: true };
        }
      }
      return note;
    });
    setNotes(tempNotes);
  };
  const handleArchivedClick = (args) => {
    let tempNotes = notes.map((note) => {
      if (note.id === args.id) {
        let archivedValue = note.isArchived;
        if (archivedValue === true) {
          note = { ...note, isArchived: false };
        } else if (archivedValue === false) {
          note = { ...note, isArchived: true };
        }
      }
      return note;
    });
    setNotes(tempNotes);
  };
  return (
    <div className="DisplayContainer">
      <div>
        {props.title}{" "}
        {props.isPinned ? (
          <RiUnpinLine
            onClick={() => handlePinnedClick(props)}
            className="NoteCardIcons noteIcons"
          />
        ) : (
          <BsPinFill
            onClick={() => handlePinnedClick(props)}
            className="NoteCardIcons noteIcons"
          />
        )}
      </div>
      <hr />
      <div className="noteRenderer">
        {props.note}
        <div className="NoteCardIcons ">
          {props.isArchived ? (
            <MdOutlineUnarchive
              className="noteIcons"
              onClick={() => handleArchivedClick(props)}
            />
          ) : (
            <BiArchiveIn
              className="noteIcons"
              onClick={() => handleArchivedClick(props)}
            />
          )}
          <ImBin2 className="noteIcons" />
        </div>
      </div>
    </div>
  );
};
