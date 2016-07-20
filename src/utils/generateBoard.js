import _ from 'lodash';

import { WallPadding } from '../entities/obstacles';
import { Floor } from '../entities/floor';
import { Player } from '../entities/player';

const BOARD_DIMENSIONS = [512, 512]
const PADDING = 50;  // pad the outer area with walls

export default function generateBoard() {

  const totalRows = PADDING + BOARD_DIMENSIONS[0]
  const totalCols = PADDING + BOARD_DIMENSIONS[1]

  // TODO: optimise this to make padding-arrays references
  let board = []
  for (let row = 0; row < totalRows; row++) {
    board.push([]);
    for (let col = 0; col < totalCols; col++) {
      board[row][col] = WallPadding
    }
  }

  for (let row = 0 + PADDING; row < totalRows - PADDING; row++) {
    for (let col = 0 + PADDING; col < totalCols; col++) {
      board[row][col] = Floor
    }
  }

  board[70][70] = _.clone(Player);


  // if < 50 then pad

  console.log(board);
  return board;
}
