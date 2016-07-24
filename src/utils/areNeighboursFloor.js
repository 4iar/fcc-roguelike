import { floorEntity } from '../constants/entityTypes';

export default function areNeighboursFloor(board, coordinates) {
  const row = coordinates[0];
  const col = coordinates[1];

  for (let rowRelative = -1; rowRelative < 2; rowRelative++){
    for (let colRelative = -1; colRelative < 2; colRelative++) {
      let newRow = row + rowRelative;
      let newCol = col + colRelative;

      if (board[newRow] && board[newRow][newCol]) {
        if (board[newRow][newCol].type !== floorEntity) {
          return false;
        }
      }
    }
  }

  return true;
}
