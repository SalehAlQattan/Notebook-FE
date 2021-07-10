import { useState } from "react";
import NoteModal from "../modals/NoteModal";

const AddNoteButton = ({ notebook }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <button className="btn btn-primary" onClick={openModal}>
        Add note
      </button>
      <NoteModal isOpen={isOpen} closeModal={closeModal} notebook={notebook} />
    </div>
  );
};

export default AddNoteButton;

/*



*/
