import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default class LoseWinModal extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      showModal: false 
    };
  }
  
  closeModal() {
    this.setState({
      showModal: false
    });
  }
  
  handleResetGame() {
    this.closeModal();
  }
  
  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.handleResetGame.bind(this)}
        >
          <Modal.Header>
            <Modal.Title>
              Outcome
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            Outcome details
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleResetGame.bind(this)}>Play again</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
