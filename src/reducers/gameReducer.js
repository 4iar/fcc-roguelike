import _ from 'lodash';

import initialState from './initialState';
import { ATTACK, MOVE, CHANGELEVEL } from '../constants/actionTypes';
import { Floor } from '../entities/floor';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    case ATTACK: {
      const playerAttackDamage = (state.player.damage * state.player.level);
      let enemy = {...state.board[action.payload.coordinates[0]][action.payload.coordinates[1]]};
      let newBoard = _.cloneDeep(state.board);

      const newEnemyHealth = enemy.health - playerAttackDamage;
      const enemyIsDead = newEnemyHealth <= 0;

      const newPlayerHealth = state.player.health - enemy.attack;
      const playerIsDead = newPlayerHealth <= 0;

      if (playerIsDead) {
        console.log("player died");
      } else if (enemyIsDead) {
        console.log("enemy is dead");
        enemy = Floor;
      } else {
        // enemy is just damaged
        console.log("enemy was damaged: " + enemy.health);
        enemy.health -= playerAttackDamage;
      }

      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = enemy;
      return {
        ...state,
        board: newBoard
      };
    }
    case MOVE: {
      let newBoard = _.cloneDeep(state.board);
      const playerObject = state.board[state.player.coordinates[0]][state.player.coordinates[1]];
      //TODO: refactor to use newCoordinates

      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = {...playerObject}
      newBoard[state.player.coordinates[0]][state.player.coordinates[1]] = Floor;

      const newCoordinates = action.payload.coordinates;
      console.log(newCoordinates);
      return {
        ...state,
        board: newBoard,
        player: {...state.player, coordinates: newCoordinates}
      };
    }
    case CHANGELEVEL: {
      const newLevel = state.levelNumber + action.payload.direction;
      const previousCoordinates = state.player.coordinates;

      const directionKey = {'-1': 'down', '1': 'up'}['' + action.payload.direction];
      const newCoordinates = state.levels[newLevel].spawnCoordinates[directionKey];

      // set the player character on the new board
      let newBoard = state.levels[newLevel].board;
      newBoard[newCoordinates[0]][newCoordinates[1]] = state.board[previousCoordinates[0]][previousCoordinates[1]];

      return {
        ...state,
        board: newBoard,
        levelNumber: newLevel,
        player: {
          ...state.player,
          coordinates: newCoordinates
        }
      };
    }
    default:
      return state;
  }
}

