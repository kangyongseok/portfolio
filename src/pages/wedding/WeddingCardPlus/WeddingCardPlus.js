import React from 'react';
import Modal from 'react-modal';
import './WeddingCardPlus.scss';
import { FaPlusCircle } from "react-icons/fa";

class WeddingCardPlus extends React.Component {
    constructor () {
      super();
      this.state = {
        showModal: false,
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
    
    render () {
      return (
        <div className="card-plus">
          <button className="card-plus-btn" onClick={this.handleOpenModal}><FaPlusCircle /></button>
          <Modal
             isOpen={this.state.showModal}
             contentLabel="Minimal Modal Example"
             ariaHideApp={false}
             className='card-modal'
             overlayClassName="Overlay"
          >
            <h3>웨딩홀 정보 입력</h3>
            <button className="card-modal-close" onClick={this.handleCloseModal}>Close Modal</button>
          </Modal>
        </div>
      );
    }
  }




export default WeddingCardPlus;