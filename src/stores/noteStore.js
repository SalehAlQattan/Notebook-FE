import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class NoteStore {
  notes = [];
  constructor() {
    makeAutoObservable(this);
  }
  // fetch notes
  fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notes');
      this.notes = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // delete note

  // create note

  // update note
}

const noteStore = new NoteStore();
noteStore.fetchNotes();

export default noteStore;
