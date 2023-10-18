import { useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
  content: {
    backgroundColor: `transparent `,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

Modal.setAppElement('#root');

export const ImageGalleryItem = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <img
        onClick={() => openModal()}
        width={600}
        height={423}
        src={img.webformatURL}
        alt=""
      />
      <Modal
        isOpen={isModalOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src={img.largeImageURL} alt="requestPhoto" />
      </Modal>
    </>
  );
};
