import { Link } from 'react-router-dom';

const NoteBookItem = ({ notebook }) => {
  let { name, image, slug } = notebook;
  return (
    <div style={containerStyle}>
      <Link to={`/notebooks/${slug}`}>
        <img style={imgStyle} src={image} alt={name} />
      </Link>
      <h3>{name}</h3>
    </div>
  );
};

const imgStyle = {
  width: '250px',
  height: '250px',
  objectFit: 'contain',
};

const containerStyle = {
  textAlign: 'center',
  border: '1px solid #ccc',
  borderRadius: '5px',
  margin: '5px',
  padding: '5px',
  display: 'inline-block',
  width: '300px',
};

export default NoteBookItem;
