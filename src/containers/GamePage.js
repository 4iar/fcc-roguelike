import React from 'react';
import { Row, Grid } from 'react-bootstrap';

import { movementKeys } from '../constants/keyTypes';
import { enemyEntity, obstacleEntity } from '../constants/entityTypes';
import getCoordinatesInDirection from '../utils/getCoordinatesInDirection';
import outOfBounds from '../utils/outOfBounds';

import {DollarEnemy} from '../game/enemies';  // just for testing

import Board from '../components/Board';
import Log from '../components/Log';
import Stats from '../components/Stats';

export default class GamePage extends React.Component {
  constructor(props) {
    super(props);

    window.addEventListener("keydown", this.handleKeyDown.bind(this), false);
  }

  handleKeyDown(e) {
    const keyCode = e.keyCode;

    if (movementKeys[keyCode]) {
      this.handleMovement(movementKeys[keyCode]);
    }
  }

  handleMovement(direction) {
    const board = [
      [1,DollarEnemy,3],
      [4,5,6],
      [7,8,9]
    ];
    const playerLocation = [1, 1];
    console.log("new coordinates: " + getCoordinatesInDirection(playerLocation, direction));
    const newCoordinates = getCoordinatesInDirection(playerLocation, direction);

    if (!outOfBounds(board, newCoordinates)) {
      const entity = board[newCoordinates[0]][newCoordinates[1]];

      switch(entity.type) {
        case enemyEntity:
          console.log(entity.type);
          console.log(entity);
          break;
        default:
          console.log("dunno");
      }
    }

    if (!outOfBounds(board, newCoordinates)) {
      console.log("got undefined coords at ");
    } else if (board[newCoordinates[0]][newCoordinates[1]].type) {
      console.log([board[newCoordinates[0]][newCoordinates[1]]]);
    }
  }

  render() {
    return (
      <Grid>

        <Row>
          <Stats />
        </Row>

        <Row>
          <Board />
          <Log />
        </Row>

      </Grid>
    );
  }
}
