import React from 'react';
import _ from 'lodash';
import { Col } from 'react-bootstrap';
import { connect } from 'react-redux';

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
    super(props);

    this.state = {
      board: this.props.board,
      playerCoordinates: this.props.playerCoordinates,
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      board: newProps.board,
      playerCoordinates: newProps.playerCoordinates
    });
  }

  render() {
    const rowLength = this.state.board.length;
    const colLength = this.state.board[0].length;

    let rowElements = [];
    for (let row = 0; row < rowLength; row++) {
      rowElements.push([]);
      for (let col = 0; col < colLength; col++) {
        rowElements[row].push(<div className="square">{this.state.board[row][col].character}</div>);
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
