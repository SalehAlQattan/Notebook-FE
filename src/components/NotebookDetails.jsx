import { useParams } from "react-router";
import notebookStore from "../stores/notebookStore";
import noteStore from "../stores/noteStore";
import NoteList from "./NoteList";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react";

const NotebookDetails = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const { notebookSlug } = useParams();
  const notebook = notebookStore.notebooks.find(
    (notebook) => notebookSlug === notebook.slug
  );
  let { name, image } = notebook;

  let notes = notebook.notes.map((note) => noteStore.getNoteById(note.id));

  return (
    <div>
      <h1>{name}</h1>
      <button className="btn btn-secondary d-block my-2" onClick={goBack}>
        Back
      </button>
      <img style={imageStyle} src={image} alt={name} />
      <NoteList notebook={notebook} notes={notes} />
    </div>
  );
};

const imageStyle = {
  width: "500px",
};

export default observer(NotebookDetails);
