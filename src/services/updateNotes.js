export const UpdateNote = async ({
  noteId,
  isArchived,
  isPinned,
  accessToken,
  documentId,
}) => {
  const updateObject = {};

  if (isArchived !== undefined) updateObject.isArchived = isArchived;
  if (isPinned !== undefined) updateObject.isPinned = isPinned;
  console.log(documentId);
  try {
    const response = await fetch(
      `https://notes-app-backend-c0mr.onrender.com/api/notes/update/${documentId}/${noteId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: accessToken,
        },
        body: JSON.stringify(updateObject),
      }
    );
    console.log(
      `http://notes-app-backend-c0mr.onrender.com/api/notes/update/${documentId}/${noteId}`
    );
    const responseData = await response.json();
    console.log(responseData);
  } catch (err) {
    console.log(err);
  }
};
