import { useCallback } from "react";
import { useAccessToken } from "./Context";
import { useNotes } from "./Context";

export const useFetchNotes = () => {
  const {accessToken, username } = useAccessToken();
  const { setNotes } = useNotes();

  const fetchNotes = useCallback(async () => {

    try {
      const response = await fetch(
        `https://notes-app-backend-c0mr.onrender.com/api/notes?username=${encodeURIComponent(username)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: accessToken,
          },
        }
      );
      const responseData = await response.json();
      if (responseData.error) {
        console.log(responseData.error);
      } else {
        setNotes(responseData);
        console.log(responseData);
      }
    } catch (err) {
      console.error("Error fetching notes:", err);
    }
  },[accessToken, username, setNotes]);
  return fetchNotes;
};


