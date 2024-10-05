import "./InputCard.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useNotes } from "../../Context";
import { useAccessToken } from "../../Context";
import { useFetchNotes } from "../../services/getNotes";

export function InputCard() {
  const variableObject = useNotes();
  const fetchNotes = useFetchNotes();
  const { username, accessToken } = useAccessToken();

  let { title, setTitle, inputNote, setInputNote } = variableObject;
  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };
  const handleNoteInputChange = (event) => {
    setInputNote(event.target.value);
  };

  const saveNewNote = async (note) => {
    try {
      const response = await fetch(
        "https://notes-app-backend-c0mr.onrender.com/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
          body: JSON.stringify({
            username,
            note,
          }),
        }
      );
      const responseData = await response.json();

      if (responseData.error) {
        console.log(responseData.error);
      } else if (responseData.message === "Error creating note") {
        console.log(responseData.error);
      } else {
        console.log(responseData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddButtonClick = async () => {
    const newNote = {
      title,
      note: inputNote,
      isPinned: false,
      isArchived: false,
    };
    await saveNewNote(newNote);
    fetchNotes();
  };
  // console.log(notes);
  const handleAddButtonKeyUp = async (event) => {
    if (event.key === "Enter") {
      const newNote = {
        title,
        note: inputNote,
        isPinned: false,
        isArchived: false,
      };
      await saveNewNote(newNote);
      fetchNotes();
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
