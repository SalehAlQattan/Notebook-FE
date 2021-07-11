import { observer } from "mobx-react";
import AddNoteButton from "./button/AddNoteButton";

// components
import NoteItem from "./NoteItem";

const NoteList = ({ notes, notebook }) => {
  const notesList = notes.map((note) => <NoteItem note={note} key={note.id} />);

  return (
    <>
      <AddNoteButton notebook={notebook} />
      <div>{notesList}</div>
    </>
  );
};
export default observer(NoteList);
