import React from 'react';
import _ from 'lodash';
import { Col } from 'react-bootstrap';

import '../styles/board.scss';


export default class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      board: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
      viewportSize: [5, 5],
      viewport: [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]],
    };
  }


  render() {
    const rowLength = this.state.viewport.length;
    const colLength = this.state.viewport[0].length;

    let rowElements = [];
    for (let row = 0; row < rowLength; row++) {
      rowElements.push([]);
      for (let col = 0; col < colLength; col++) {
        rowElements[row].push(<div className="square">{row}: {col}</div>)
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
