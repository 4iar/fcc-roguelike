export default function outOfBounds (board, coordinates) {
  return board[coordinates[0]] === undefined || board[coordinates[0][coordinates[1]]]
};
