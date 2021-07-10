import { makeAutoObservable } from "mobx";
import axios from "axios";

class NotebookStore {
  notebooks = [];

  constructor() {
    makeAutoObservable(this);
  }

  // fetch notebooks
  fetchNotebooks = async () => {
    try {
      const response = await axios.get("http://localhost:8000/notebooks");
      this.notebooks = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  // create notebook
  createNotebook = async (newNotebook) => {
    try {
      const formData = new FormData();
      for (let key in newNotebook) formData.append(key, newNotebook[key]);

      const response = await axios.post(
        "http://localhost:8000/notebooks",
        formData
      );

      this.notebooks.push(response.data);
    } catch (error) {
      console.error(error);
    }
  };
}

const notebookStore = new NotebookStore();
notebookStore.fetchNotebooks();

export default notebookStore;
