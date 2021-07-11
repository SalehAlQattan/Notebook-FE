import { observer } from 'mobx-react';

const NoteItem = ({ note }) => {
  return (
    <div style={styles}>
      <h1>{note.title}</h1>
      <p style={{ whiteSpace: 'pre-line' }}>{note.body}</p>
    </div>
  );
};

const styles = {
  border: '3px solid #ccc',
  margin: '5px',
  padding: '7px',
  borderRadius: '5px',
};

export default observer(NoteItem);
