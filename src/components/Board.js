import React from 'react';
import _ from 'lodash';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import calculateMovementDelta from '../utils/calculateMovementDelta';

import '../styles/board.scss';

const getState = (state) => {
  return {
    board: state.game.board,
    playerCoordinates: state.game.player.coordinates
  };
};

@connect(getState, null, null, {withRef: true})
export default class Board extends React.Component {
  constructor(props) {
    super(props)

    this.viewportSize = [7, 7];

    this.state = {
      board: this.props.board,
      playerCoordinates: this.props.playerCoordinates,
      viewport: this.shiftViewport(this.props.board, this.props.playerCoordinates)
    };
  }

  generateViewportDeltas(delta) {
    const halfWidth = Math.floor(this.viewportSize[0] / 2);
    const halfHeight = Math.floor(this.viewportSize[1] / 2);

    let viewportDeltas = [];
    for (let row = (halfWidth * -1 + 1); row < halfWidth; row++) {
      viewportDeltas.push([]);
      for (let col = (halfHeight * -1 + 1); col < halfHeight; col++) {
        viewportDeltas[viewportDeltas.length - 1].push([row, col]);
      }
    }

    console.log(viewportDeltas);
    return viewportDeltas;
  }

  shiftViewport(board, playerCoordinates, delta=[0, 0]) {
    const viewportDeltas = this.generateViewportDeltas(delta);
    
    // can eliminate generateViewportDeltas and place that stuff here?
    let viewport = []
    for (let row = 0; row < viewportDeltas.length; row++) {
      viewport.push([]);
      for (let col = 0; col < viewportDeltas[0].length; col++) {
        let currRow = playerCoordinates[0] + viewportDeltas[row][col][0]
        let currCol = playerCoordinates[1] + viewportDeltas[row][col][1]
        viewport[row].push(board[currRow][currCol])
      }
    }

    return viewport;
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      board: newProps.board,
      playerCoordinates: newProps.playerCoordinates,
      viewport: this.shiftViewport(newProps.board, newProps.playerCoordinates, calculateMovementDelta(this.state.playerCoordinates, newProps.playerCoordinates))
    });
  }

  render() {
    const rowLength = this.state.viewport.length
    const colLength = this.state.viewport[0].length;

    let rowElements = [];
    for (let row = 0; row < rowLength; row++) {
      rowElements.push([]);
      for (let col = 0; col < colLength; col++) {
        rowElements[row].push(<div className="square">{this.state.viewport[row][col].character}</div>)
      }
    }

    return (
      <Col xs={11} md={11}>
        <div className="board">
          {_.range(rowElements.length).map((row) => {
            return (
              <div className="row">
                {rowElements[row]}
              </div>
            );
          })}
        </div>
      </Col>
    );
  }
}
