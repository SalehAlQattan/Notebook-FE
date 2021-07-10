import { Link } from "react-router-dom";

const NoteBookItem = ({ notebook }) => {
  let { name, image, slug } = notebook;
  return (
    <div style={containerStyle}>
      <Link to={`/notebooks/${slug}`}>
        <h1>{name}</h1>
      </Link>
      <img style={imgStyle} src={image} alt={name} />
    </div>
  );
};

const imgStyle = {
  width: "400px",
};

const containerStyle = {
  textAlign: "center",
};

export default NoteBookItem;
