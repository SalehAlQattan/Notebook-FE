// store
import noteStore from '../stores/noteStore';
// components
import NoteItem from './NoteItem';

const NoteList = () => {
  const noteList = noteStore.notes.map((note) => {
    return <NoteItem note={note} key={note.id} />;
  });

  return <div>{noteList}</div>;
};

export default NoteList;
