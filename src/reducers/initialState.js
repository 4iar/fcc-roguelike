import generateLevels from '../utils/generateLevels';

let levels = generateLevels();
export default {
  game: {
    board: levels[0].board,
    levels,
    levelNumber: 0,
    player: {
      coordinates: levels[0].spawnCoordinates.player,
      xp: 0,
      level: 1,
      health: 10,
      damage: 5,
      criticalChance: 0.3,
      items: {}
    }
  }
};
