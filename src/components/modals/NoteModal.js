import React, { useState } from "react";
import Modal from "react-modal";
import noteStore from "../../stores/noteStore";

const NoteModal = ({ isOpen, closeModal, notebook }) => {
  const [note, setNote] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    noteStore.createNote(note, notebook);

    setNote({
      title: "",
      body: "",
    });

    closeModal();
  };

  const handleChange = (event) => {
    setNote({
      ...note,
      [event.target.name]: event.target.value,
    });
    console.log(note);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      // style={customStyles}
      contentLabel="Note modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            name="title"
            onChange={handleChange}
            type="text"
            className="form-control"
            placeholder="Enter note name"
          />
        </div>
        <div className="form-group">
          <label>Body</label>
          <textarea
            name="body"
            onChange={handleChange}
            className="form-control"
            col="10"
            row="10"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default NoteModal;
