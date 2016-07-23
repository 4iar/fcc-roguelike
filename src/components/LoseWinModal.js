import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';

import { reset } from '../actions/gameActions';

const getState = (state) => {
  return {
    health: state.game.player.health,
    bossKilled: state.game.bossKilled
  };
};

@connect(getState, {reset}, null, {withRef: true})
export default class LoseWinModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      outcome: ''
    }
  }

  componentWillReceiveProps(newProps) {
    console.log("got new props");
    if (newProps.health <= 0) {
      this.setState({
        showModal: true,
        outcome: "lost"
      });
    } else if (newProps.bossKilled) {
      this.setState({
        showModal: true,
        outcome: "won"
      });
    }
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }
  
  handleResetGame() {
    this.closeModal();
    this.props.reset();
  }
  
  render() {
    const title = {
      won: 'You won!',
      lost: 'You lost :('
    }
    
    const body = {
      won: 'Big Boss was defeated',
      lost: 'Big Boss remains undefeated. Try again.'
    }
    
    
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={this.handleResetGame.bind(this)}
        >
          <Modal.Header>
            <Modal.Title>
              {title[this.state.outcome]}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {body[this.state.outcome]}
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={this.handleResetGame.bind(this)}>Play again</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
