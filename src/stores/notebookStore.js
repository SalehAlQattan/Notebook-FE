import { makeAutoObservable } from 'mobx';
import axios from 'axios';

class NotebookStore {
  notebooks = [];

  constructor() {
    makeAutoObservable(this);
  }

  // fetch notebooks
  fetchNotebooks = async () => {
    try {
      const response = await axios.get('http://localhost:8000/notebooks');
      this.notebooks = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // create notebook
}

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;
