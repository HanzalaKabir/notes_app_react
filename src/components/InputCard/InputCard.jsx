import "./InputCard.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNotes } from "../../Context";

export function InputCard() {
  const variableObject = useNotes();
  let { title, setTitle, inputNote, setInputNote, notes, setNotes } =
    variableObject;
  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleNoteInputChange = (event) => {
    setInputNote(event.target.value);
  };
  const handleAddButtonClick = () => {
    setNotes([
      ...notes,
      {
        title,
        note: inputNote,
        isPinned: false,
        isArchived: false,
      },
    ]);
    
  };
  // console.log(notes);
  const handleAddButtonKeyUp = (event) => {
    if (event.key === "Enter") {
      setNotes([
        ...notes,
        {
          title,
          note: inputNote,
          isPinned: false,
          isArchived: false,
        },
      ]);
    }
  };
  return (
    <div className="inputCard" onKeyUp={handleAddButtonKeyUp}>
      <div className="noteTitleContainer">
        <input
          className="input titleInput"
          onChange={handleTitleInputChange}
          placeholder="Enter title"
        />
        <textarea
          className="input noteInput"
          onChange={handleNoteInputChange}
          placeholder="Enter note"
        ></textarea>
        <IoMdAddCircleOutline
          size="30"
          onClick={handleAddButtonClick}
          className="addButton"
        />
      </div>
    </div>
  );
}
