import React from 'react';
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import { attack } from '../actions/gameActions';
import { movementKeys } from '../constants/keyTypes';
import { enemyEntity, obstacleEntity, floorEntity } from '../constants/entityTypes';
import getCoordinatesInDirection from '../utils/getCoordinatesInDirection';
import outOfBounds from '../utils/outOfBounds';

import Board from '../components/Board';
import Log from '../components/Log';
import Stats from '../components/Stats';


const getState = (state) => {
  return {
    board: state.game.board,
    playerCoordinates: state.game.player.location
  };
};

@connect(getState, {attack}, null, {withRef: true})
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
    const map = this.props.board;
    const playerLocation = [1, 1];
    console.log("new coordinates: " + getCoordinatesInDirection(playerLocation, direction));
    const newCoordinates = getCoordinatesInDirection(playerLocation, direction);

    if (!outOfBounds(map, newCoordinates)) {
      const entity = map[newCoordinates[0]][newCoordinates[1]];

      switch(entity.type) {
        case floorEntity:
          console.log("encountered floor");
          break;
        case enemyEntity:
          this.props.attack(newCoordinates);
          break;
        default:
          console.log("dunno");
      }
    }

    if (!outOfBounds(map, newCoordinates)) {
      console.log("coords not undefined");
    } else if (map[newCoordinates[0]][newCoordinates[1]].type) {
      console.log([map[newCoordinates[0]][newCoordinates[1]]]);
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
