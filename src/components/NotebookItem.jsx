import { Link } from 'react-router-dom';

const NoteBookItem = ({ notebook }) => {
  let { name, image, slug } = notebook;
  return (
    <div>
      <Link to={`/notebooks/${slug}`}>
        <h1>{name}</h1>
      </Link>
      <img src={image} alt={name} />
    </div>
  );
};

export default NoteBookItem;
