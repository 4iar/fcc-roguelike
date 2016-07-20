import _ from 'lodash';

import { Floor } from '../entities/floor';
import { Player } from '../entities/player';

const BOARD_DIMENSIONS = [50, 50];

export default function generateBoard() {

  let board = [];
  for (let row = 0; row < BOARD_DIMENSIONS[0]; row++) {
    board.push([]);
    for (let col = 0; col < BOARD_DIMENSIONS[1]; col++) {
      board[row][col] = Floor;
    }
  }

  // TODO: prevent hardcoding of initial player location
  board[5][5] = _.clone(Player);

  console.log(board);
  return board;
}
