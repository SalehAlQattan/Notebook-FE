import { observer } from 'mobx-react';
// store
import notebookStore from '../stores/notebookStore';
// components
import NotebookItem from './NotebookItem';
//
const NotebookList = () => {
  const notebooks = notebookStore.notebooks.map((notebook) => {
    return <NotebookItem notebook={notebook} key={notebook.id} />;
  });

  console.log(notebooks);

  return <div>{notebooks}</div>;
};

export default observer(NotebookList);
