import { Component } from 'react';
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

export default class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };

  modalOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  modalClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const { img } = this.props;
    return (
      <>
        <img
          onClick={() => this.modalOpen()}
          width={600}
          height={423}
          src={img.webformatURL}
          alt=""
        />
        <Modal
          isOpen={this.state.isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={() => this.modalClose()}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={img.largeImageURL} alt="requestPhoto" />
        </Modal>
      </>
    );
  }
}
