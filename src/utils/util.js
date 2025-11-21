export function addNote(note) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
}
export function updateNote(newNote) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const newNotes = notes.map((note) =>
    note.id === newNote.id ? newNote : note
  );
  localStorage.setItem("notes", JSON.stringify(newNotes));
}
export function deleteNote(id) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  localStorage.setItem(
    "notes",
    JSON.stringify(notes.filter((note) => note.id !== id))
  );
}

export function getNote(id) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  return notes.find((note) => note.id == id);
}

export function getAllNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

export function searchNote(searchText) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  if (searchText == "") return undefined;
  const result = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase()) ||
      note.text.toLowerCase().includes(searchText.toLowerCase())
  );
  return result;
}
