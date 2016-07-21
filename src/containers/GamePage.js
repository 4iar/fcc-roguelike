import React from 'react';
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import { attack, move, changeLevel } from '../actions/gameActions';
import { movementKeys } from '../constants/keyTypes';
import { enemyEntity, obstacleEntity, floorEntity, ladderEntity } from '../constants/entityTypes';
import getCoordinatesInDirection from '../utils/getCoordinatesInDirection';
import outOfBounds from '../utils/outOfBounds';

import Board from '../components/Board';
import Log from '../components/Log';
import Stats from '../components/Stats';


const getState = (state) => {
  return {
    board: state.game.board,
    playerCoordinates: state.game.player.coordinates
  };
};

@connect(getState, {attack, move, changeLevel}, null, {withRef: true})
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
    const playerCoordinates = this.props.playerCoordinates;
    const newCoordinates = getCoordinatesInDirection(playerCoordinates, direction);

    if (!outOfBounds(map, newCoordinates)) {
      const entity = map[newCoordinates[0]][newCoordinates[1]];

      switch(entity.type) {
        case floorEntity:
          this.props.move(newCoordinates);
          break;
        case obstacleEntity:
          console.log("encountered obstacle");
          break;
        case enemyEntity:
          this.props.attack(newCoordinates);
          break;
        case ladderEntity:
          console.log("changing level: " + entity.direction);
          this.props.changeLevel(entity.direction);
          break;
        default:
          console.log("dunno");
      }
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
