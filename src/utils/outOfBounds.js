export default function outOfBounds (board, coordinates) {
  return coordinates[0] < 0 || coordinates[1] < 0 || coordinates[0] >= board.length || coordinates[1] >= board[0].length;
}
