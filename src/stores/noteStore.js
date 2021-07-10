import { makeAutoObservable } from "mobx";
import axios from "axios";

class NoteStore {
  notes = [];
  constructor() {
    makeAutoObservable(this);
  }
  // fetch notes
  fetchNotes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notes");
      this.notes = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // delete note

  // create note
  createNote = async (newNote, notebook) => {
    try {
      const response = await axios.post(
        `http://localhost:8000/notebooks/${notebook.id}/notes`,
        newNote
      );
      this.notes.push(response.data);
      notebook.push({ id: response.data.id });

      console.log(notebook);
    } catch (error) {
      console.error(error);
    }
  };
  // update note

  getNoteById = (noteId) => this.notes.find((note) => note.id === noteId);
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
