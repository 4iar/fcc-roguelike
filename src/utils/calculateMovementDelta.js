export default function calculateMovementDelta(oldPosition, newPosition) {
  
  return [newPosition[0] - oldPosition[0], newPosition[1] - oldPosition[1]];
}
