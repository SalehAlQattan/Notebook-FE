import React, { useState } from "react";
import NotebookModal from "../modals/NotebookModal";

const AddNotebookButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Add notebook
      </button>
      <NotebookModal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddNotebookButton;
