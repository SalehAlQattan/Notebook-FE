import React, { useState } from "react";
import Modal from "react-modal";
import notebookStore from "../../stores/notebookStore";

const NotebookModal = ({ isOpen, closeModal }) => {
  const [notebook, setNotebook] = useState({
    name: "",
    image: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    notebookStore.createNotebook(notebook);

    setNotebook({
      name: "",
      image: "",
    });

    closeModal();
  };

  const handleChange = (event) => {
    setNotebook({
      ...notebook,
      [event.target.name]: event.target.value,
    });
    console.log(notebook);
  };

  const handleImage = (event) => {
    setNotebook({ ...notebook, image: event.target.files[0] });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Notebook modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="name"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter notebook name"
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            name="image"
            onChange={handleImage}
            type="file"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default NotebookModal;
