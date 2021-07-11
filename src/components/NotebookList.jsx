import { observer } from 'mobx-react';

// store
import notebookStore from '../stores/notebookStore';

// components
import NotebookItem from './NotebookItem';
import AddNotebookButton from './button/AddNotebookButton';
//
const NotebookList = () => {
  const notebooks = notebookStore.notebooks
    .slice()
    .sort((a, b) => a.id - b.id)
    .map((notebook) => <NotebookItem notebook={notebook} key={notebook.id} />);

  console.log(notebooks);

  return (
    <div style={{ textAlign: 'center' }}>
      <AddNotebookButton />
      <div>{notebooks}</div>
    </div>
  );
};

export default observer(NotebookList);
