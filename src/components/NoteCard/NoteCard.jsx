import "./NoteCard.css";
import { BsPinFill } from "react-icons/bs";
import { BiArchiveIn } from "react-icons/bi";
import { RiUnpinLine } from "react-icons/ri";
import { ImBin2 } from "react-icons/im";
import { MdOutlineUnarchive } from "react-icons/md";
import { useNotes } from "../../Context/notesContext";
import { useFetchNotes } from "../../services/getNotes";
import { UpdateNote } from "../../services/updateNotes";
import { useAccessToken } from "../../Context";

export const NoteCard = (props) => {
  const variableObject = useNotes();
  let { notes } = variableObject;
  const { accessToken } = useAccessToken();
  const { documentId } = useNotes();

  const fetchNotes = useFetchNotes();

  const handlePinnedClick = (args) => {
    notes.map(async (note) => {
      if (note._id === args._id) {
        let pinnedValue = !note.isPinned;
        await UpdateNote({
          noteId: args._id,
          isPinned: pinnedValue,
          accessToken,
          documentId,
        });
        fetchNotes();
      }
    });
  };
  const handleArchivedClick = (args) => {
    notes.map(async (note) => {
      if (note._id === args._id) {
        let archivedValue = !note.isArchived;
        await UpdateNote({
          noteId: args._id,
          isArchived: archivedValue,
          accessToken,
          documentId,
        });
        fetchNotes();
      }
    });
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
