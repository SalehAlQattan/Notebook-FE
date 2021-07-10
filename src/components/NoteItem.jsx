import { observer } from "mobx-react";

const NoteItem = ({ note }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <h2>{note.body}</h2>
    </div>
  );
};

export default observer(NoteItem);
