import _ from 'lodash';

import { LadderUp, LadderDown } from '../entities/ladders';
import areNeighboursFloor from './areNeighboursFloor';

function findLadderPosition(board) {
  let found = false;
  while (!found) {
    const ladderCoordinates = [_.random(1, board.length), _.random(1, board[0].length)];
    
    if (areNeighboursFloor(board, ladderCoordinates)) {
      return ladderCoordinates;
    }
  }
}

export default function populateLadders(level, ladders={up: false, down: false}) {
  let board = level.board;
  let spawnCoordinates = {};
  
  // TODO: factor these out
  if (ladders.up) {
    const ladderUpCoords = findLadderPosition(board);
    board[ladderUpCoords[0]][ladderUpCoords[1]] = LadderUp;
    spawnCoordinates['up'] = [ladderUpCoords[0] + 1, ladderUpCoords[1]];
  }

  if (ladders.down) {
    const ladderDownCoords = findLadderPosition(board);
    board[ladderDownCoords[0]][ladderDownCoords[1]] = LadderDown;
    spawnCoordinates['down'] = [ladderDownCoords[0] - 1, ladderDownCoords[1]];
  }

  return {
    ...level, 
    board: board,
    spawnCoordinates: {
      ...level.spawnCoordinates,
      up: spawnCoordinates['up'],
      down: spawnCoordinates['down']
    }
  };
}
