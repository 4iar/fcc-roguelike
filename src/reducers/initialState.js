import {DollarEnemy} from '../entities/enemies';  // just for testing

export default {
  game: {
    board: [
      [1,DollarEnemy,3],
      [4,5,6],
      [7,8,9]
    ],
    player: {
      location: [1,1],
      xp: 0,
      level: 1,
      health: 10,
      damage: 5,
      criticalChance: 0.3,
      items: {}
    }
  }
};
