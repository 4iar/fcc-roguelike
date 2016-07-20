const directionToCoordinateDelta = {
  left: [0, -1],
  right: [0, 1],
  up: [-1, 0],
  down: [1, 0]
};

export default function getCoordinatesInDirection (coordinates, direction) {
  return [
    directionToCoordinateDelta[direction][0] + coordinates[0],
    directionToCoordinateDelta[direction][1] + coordinates[1],
  ];
}
