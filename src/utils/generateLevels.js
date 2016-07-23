import _ from 'lodash';

import makeRect from './makeRect';
import populateEntities from './populateEntities';
import { floorEntity } from '../constants/entityTypes';

import { Floor } from '../entities/floor';
import { Wall } from '../entities/obstacles';

const BOARD_DIMENSIONS = [50, 50];
const NUMBER_OF_LEVELS = 3;

function generateEmptyLevel() {
  let board = [];
  for (let row = 0; row < BOARD_DIMENSIONS[0]; row++) {
    board.push([]);
    for (let col = 0; col < BOARD_DIMENSIONS[1]; col++) {
      board[row][col] = {character: ' '};  // TODO: use an empty space/void entity
    }
  }

  // TODO: use dynamic room sizes that account for different board dimensions
  _.times(240, () => {
    const middleRect = makeRect([_.random(1, 40), _.random(1, 40)], _.random(6, 9), _.random(6, 9));
    middleRect.boundary.forEach((coords) => {
      if (board[coords[0]][coords[1]].type !== floorEntity) {
        board[coords[0]][coords[1]] = Wall;
      }
    })

    middleRect.inner.forEach((coords) => {
      board[coords[0]][coords[1]] = Floor;
    })
  })

  return board;
}

function generateLevel() {
  const board = generateEmptyLevel();
  let level = populateEntities({board}, {up: true, down: true});
  
  return {
    ...level,
    board: level.board,
  }
}

export default function generateLevels() {
  let levels = [];
  for (let levelNumber = 0; levelNumber < NUMBER_OF_LEVELS; levelNumber++) {
    levels.push(generateLevel());
  }

  return levels;
}
