import _ from 'lodash';

import initialState from './initialState';
import { ATTACK, MOVE, CHANGELEVEL, PICKUPWEAPON, PICKUPARMOUR, PICKUPPOTION, RESET } from '../constants/actionTypes';
import { Floor } from '../entities/floor';

export default function game(state = initialState.game, action) {
  switch (action.type) {
    case ATTACK: {
      let newBossKilled = state.bossKilled;
      let newPlayerXp = state.player.xp;
      let newPlayerLevel = state.player.level;
      let newEnemy = {...state.board[action.payload.coordinates[0]][action.payload.coordinates[1]]};

      const playerAttackDamage = Math.ceil((action.payload.multipliers.player
          * state.player.damage
          * (1 + (state.player.level/10))
        ) + state.player.weapon.damage);

      const enemyAttackDamage = Math.max(0, Math.ceil(newEnemy.damage
          * action.payload.multipliers.enemy
          * (state.levelNumber + 3)
        ) - (state.player.armour.defence
        * state.player.level)
      );

      let newBoard = _.cloneDeep(state.board);

      newEnemy.health -= playerAttackDamage;
      const enemyIsDead = newEnemy.health <= 0;
      let newPlayerHealth = state.player.health;

      if (!enemyIsDead) {
        newPlayerHealth -= enemyAttackDamage;
      } else {
        newPlayerXp += newEnemy.xpOnDeath;
        if (newPlayerXp >= 100) {
          newPlayerXp = (newPlayerXp - 100);
          newPlayerLevel += 1;
        }
        
        if (newEnemy.boss) {
          newBossKilled = true; 
        }
        
        newEnemy = Floor;
      }

      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = newEnemy;
      
      let newLevels = state.levels;
      newLevels[state.levelNumber].board = newBoard;
      
      return {
        ...state,
        board: newBoard,
        levels: newLevels,
        bossKilled: newBossKilled,
        player: {
          ...state.player,
          level: newPlayerLevel,
          xp: newPlayerXp,
          health: newPlayerHealth
        }
      };
    }
    case MOVE: {
      let newBoard = _.cloneDeep(state.board);
      const playerObject = state.board[state.player.coordinates[0]][state.player.coordinates[1]];
      //TODO: refactor to use newCoordinates

      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = {...playerObject}
      newBoard[state.player.coordinates[0]][state.player.coordinates[1]] = Floor;

      const newCoordinates = action.payload.coordinates;
      return {
        ...state,
        board: newBoard,
        player: {...state.player, coordinates: newCoordinates}
      };
    }
    case CHANGELEVEL: {
      const newLevelNumber = state.levelNumber + action.payload.direction;
      const previousCoordinates = state.player.coordinates;

      // TODO: make this less silly
      // switch direction for coordinates because we want to ascend to a down ladder
      // rather than ascending to another up ladder + vice-versa
      const directionKey = {'-1': 'up', '1': 'down'}['' + action.payload.direction];
      const newCoordinates = state.levels[newLevelNumber].spawnCoordinates[directionKey];

      // set the player character on the new board
      let newBoard = _.cloneDeep(state.levels[newLevelNumber].board);
      newBoard[newCoordinates[0]][newCoordinates[1]] = state.board[previousCoordinates[0]][previousCoordinates[1]];

      let newCurrentBoard = state.board;
      newCurrentBoard[previousCoordinates[0], previousCoordinates[1]] = Floor;
      let newLevels = state.levels;
      newLevels[state.levelNumber] = {...state.levels[state.levelNumber], newCurrentBoard};

      return {
        ...state,
        board: newBoard,
        levels: newLevels,
        levelNumber: newLevelNumber,
        player: {
          ...state.player,
          coordinates: newCoordinates
        }
      };
    }
    case PICKUPWEAPON: {
      let newBoard = _.cloneDeep(state.board);
      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = Floor;
      
      let newLevels = state.levels;
      newLevels[state.levelNumber].board = newBoard;
      
      return {
        ...state,
        board: newBoard,
        levels: newLevels,
        player: {
          ...state.player,
          weapon: action.payload.item
        }
      };
    }
    case PICKUPARMOUR: {
      let newBoard = _.cloneDeep(state.board);
      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = Floor;

      let newLevels = state.levels;
      newLevels[state.levelNumber].board = newBoard;

      return {
        ...state,
        levels: newLevels,
        board: newBoard, 
        player: {
          ...state.player,
          armour: action.payload.item
        }
      };
    }
    case PICKUPPOTION: {
      let newBoard = _.cloneDeep(state.board);
      newBoard[action.payload.coordinates[0]][action.payload.coordinates[1]] = Floor;
      
      let newLevels = state.levels;
      newLevels[state.levelNumber].board = newBoard;
      
      return {
        ...state,
        board: newBoard,
        levels: newLevels,
        player: {
          ...state.player,
          health: state.player.health + action.payload.item.health
        }
      }
    }
    case RESET: {
      let newState = initialState.game;
      newState.levels = action.payload.levels;
      newState.board = newState.levels[0].board;
      newState.player.coordinates = newState.levels[0].spawnCoordinates.player;
      
      return newState;
    }
    default:
      return state;
  }
}

