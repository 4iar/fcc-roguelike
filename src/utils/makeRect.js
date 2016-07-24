function getRectInnerCoords(topLeft, width, height) {
  let rectCoordinates = [];
  width = width - 2;
  height = height - 2;
  topLeft = [topLeft[0] + 1, topLeft[1] + 1];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      rectCoordinates.push([topLeft[0] + y, topLeft[1] + x]);
    }
  }

  return rectCoordinates;
}

function getRectBoundaryCoords(topLeft, width, height) {
  let rectCoordinates = [];

  for (let x = 0; x < width; x++) {
    rectCoordinates.push(
      [topLeft[0] + height - 1, topLeft[1] + x],
      [topLeft[0], topLeft[1] + x]
    );
  }

  for (let y = 0; y < height; y++) {
    rectCoordinates.push(
      [topLeft[0] + y, topLeft[1]],
      [topLeft[0] + y, topLeft[1] + width - 1]
    );
  }

  return rectCoordinates;
}

export default function makeRect(topLeft, width, height) {
  return {
    boundary: getRectBoundaryCoords(topLeft, width, height),
    inner: getRectInnerCoords(topLeft, width, height)
  };
}
