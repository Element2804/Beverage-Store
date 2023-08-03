import React from 'react';
import ReactModal from 'react-modal';

export default class Modal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return(
        <div>
            <div id="item" onClick={this.handleOpenModal}></div>
            <ReactModal 
                isOpen={this.state.showModal} 
                className="Modal" 
                overlayClassName="Overlay"
            >
                <button onClick={this.handleCloseModal}>Close Modal</button>
            </ReactModal>
        </div>
        )
    }
}