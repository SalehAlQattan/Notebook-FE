import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import notebookStore from '../stores/notebookStore';

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
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <button onClick={goBack}>back</button>
    </div>
  );
};

export default NotebookDetails;
