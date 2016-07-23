import _ from 'lodash';

import populateLadders from './populateLadders';

import { Floor } from '../entities/floor';
import { Player } from '../entities/player';
import { DollarEnemy }  from '../entities/enemies';
import { LadderUp, LadderDown } from '../entities/ladders';

const BOARD_DIMENSIONS = [50, 50];
const NUMBER_OF_LEVELS = 3;

function generateLevel(ladders={up: false, down: false}) {
  let spawnCoordinates = [];

  let board = [];
  for (let row = 0; row < BOARD_DIMENSIONS[0]; row++) {
    board.push([]);
    for (let col = 0; col < BOARD_DIMENSIONS[1]; col++) {
      board[row][col] = Floor;
    }
  }

  // TODO: factor these out
  if (ladders.up) {
    const ladderUpCoords = [_.random(2, 45), _.random(2, 45)];
    board[ladderUpCoords[0]][ladderUpCoords[1]] = LadderUp;
    spawnCoordinates['up'] = [ladderUpCoords[0] + 1, ladderUpCoords[1]];
  }

  if (ladders.down) {
    const ladderDownCoords = [_.random(2, 45), _.random(2, 45)];
    board[ladderDownCoords[0]][ladderDownCoords[1]] = LadderDown;
    spawnCoordinates['down'] = [ladderDownCoords[0] - 1, ladderDownCoords[1]];
  }
  populateLadders({board}, {up: true, down: true});
  
  return {
    board,
    spawnCoordinates
  };
}


export default function generateLevels() {
  let levels = [];
  for (let levelNumber = 0; levelNumber < NUMBER_OF_LEVELS; levelNumber++) {
    levels.push(generateLevel({down: true, up: true}));
  }
  
  // placeholder for testing
  levels[0].board[0][0] = _.clone(Player);
  levels[0].spawnCoordinates.player = [0, 0]
  levels[0].board[49][49] = _.clone(DollarEnemy);
  
  return levels;
}
