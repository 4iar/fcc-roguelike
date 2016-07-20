import generateBoard from '../utils/generateBoard';

export default {
  game: {
    board: generateBoard(),
    player: {
      coordinates: [70, 70],
      xp: 0,
      level: 1,
      health: 10,
      damage: 5,
      criticalChance: 0.3,
      items: {}
    }
  }
};
