import React from 'react';
import _ from 'lodash';
import { Row, Grid } from 'react-bootstrap';
import { connect } from 'react-redux';

import { attack, move, changeLevel, pickUpItem } from '../actions/gameActions';
import { movementKeys } from '../constants/keyTypes';
import { enemyEntity, obstacleEntity, floorEntity, ladderEntity, weaponEntity, armourEntity, potionEntity } from '../constants/entityTypes';
import getCoordinatesInDirection from '../utils/getCoordinatesInDirection';
import outOfBounds from '../utils/outOfBounds';

import Board from '../components/Board';
import Stats from '../components/Stats';
import LoseWinModal from '../components/LoseWinModal';


const getState = (state) => {
  return {
    board: state.game.board,
    playerCoordinates: state.game.player.coordinates
  };
};

@connect(getState, {attack, move, changeLevel, pickUpItem}, null, {withRef: true})
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
          break;
        case enemyEntity:
          this.props.attack(newCoordinates, {enemy: _.random(1, 2, true), player: _.random(1, 2, true)});
          break;
        case ladderEntity:
          this.props.changeLevel(entity.direction);
          break;
        case weaponEntity:
        case armourEntity:
        case potionEntity:
          this.props.pickUpItem(entity, newCoordinates);
          break;
        default:
          console.log("dunno");
      }
    }
  }

  render() {
    return (
      <Grid>
        <LoseWinModal />

        <Row>
          <Stats />
        </Row>

        <Row>
          <Board />
        </Row>

      </Grid>
    );
  }
}
