import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p style={{ whiteSpace: "pre-line" }}>{note.body}</p>
    </div>
  );
};

export default observer(NoteItem);
